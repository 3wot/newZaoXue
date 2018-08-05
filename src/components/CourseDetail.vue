<template>
  <div class="course-detail">


  <div class="content-in">


      <div class="panel" >
          <div class="panel-in" v-if="!showVideo">
              <img :src="item.img+'?imageView2/1/w/640/h/360'">

              <div class="font-bottom">
                  <!-- <h4 class="font-white font-1e panel-b-title">{{item.title}}</h4> -->


                  <div class="panel-t-title">
                    <!-- <router-link to="/" slot="left"> -->
                        <span style="line-height: 25px;
                            display: inline-block;
                            background-color: rgba(0,0,0,0.2);
                            border-radius: 25px;
                            width: 25px;
                            height: 25px;
                            padding: 4px;
                            text-align: center;
                            margin-top: 5px;" class="mintui mintui-back"
                            @click="goback"
                            ></span>
                    <!-- </router-link> -->
                  </div>
              </div>

          </div>

          <div class="panel-in" v-if="showVideo">
            <iframe  id="myVideo" frameborder="0" width="100%" height="200" :src="videoSrc" allowfullscreen></iframe>
            <div class="panel-t-title">
              <!-- <router-link to="/" slot="left"> -->
                  <span style="line-height: 25px;
                      display: inline-block;
                      background-color: rgba(0,0,0,0.2);
                      border-radius: 25px;
                      width: 25px;
                      height: 25px;
                      padding: 4px;
                      text-align: center;
                      margin-top: 5px;" class="mintui mintui-back"
                      @click="goback"></span>
              <!-- </router-link> -->
            </div>

          </div>
      </div>

      <h3 class="course-title">
        <span>{{item.title}}</span>
        <!-- <span class="progress">{{item.progress}}%</span> -->
      </h3>
      <!-- <mt-progress :value="item.progress"></mt-progress> -->

      <div @click="clickCell(cc)" v-for="cc in childlist" :key="cc.index">
        <mt-cell :title="cc.title" is-link>
          <!-- <span style="color: green">{{cc.progress}}%</span> -->
        </mt-cell>
      </div>




  </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import { Cell } from 'mint-ui'
import { Progress } from 'mint-ui'
import { Toast } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'
import WXShare from '../router/wxshare'


export default {
  components:{
    Cell,Progress
  },
  name: 'CourseDetail',
  data () {
    return {
      showVideo:false,
      videoSrc:'',
      item: {},
      childlist:[],
    }
  },
  mounted() {
    //自动获取一次图片码
    this.init()

    const uurl = location.href.split('#')[0]
    WXShare.init({}, uurl)
  },
  methods:{
    goback() {
      this.$router.go(-1)
    },
    clickCell(cc){
      let url = cc.link;
      this.showVideo = true;
      this.videoSrc = url;

    },
    init(){
      const that = this
      // 获取课程
      const getLearnList = URLS.getURL('getLearnList');
      $.get(getLearnList,function(res){
        if(res.flag){
          if(res.data && res.data.length){
            $.each(res.data,function(idx,val){
              if(val.id = that.$route.params.id){
                val.title = val.name
                val.introduce = val.name
                val.img = val.pic_url
                that.item = val
              }
            })
          }
        }else{
          Toast({
            message: res.mes,
            position: 'bottom',
            duration: 3000
          });
        }
      })
      // 获取章节
      const getLessionList = URLS.getURL('getLessionList');
      const option = {
        learn_id:that.$route.params.id
      }
      $.get(getLessionList, option, function(res){
        if(res.flag){
          if(res.data && res.data.length){
            $.each(res.data,function(idx,val){
              val.title = val.name
              val.link = val.video_url
              that.childlist.push(val)
            })
          }
        }else{
          Toast({
            message: res.mes,
            position: 'bottom',
            duration: 3000
          });
        }
      })
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: auto;
}

.panel{
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}
.panel .panel-in{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.panel-in img{
  height: 100%;
  width: 100%;
}
.panel-in video{
  height: 100%;
  width: 100%;
}

.font-bottom{
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
}
.font-white{
  color: #ffffff;
}
.panel-b-title{
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-left: 1rem;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.panel-t-title{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  padding: 0px 1rem;
}
.course-title{
  padding: 1rem 1rem;
  margin: 0px;
  font-size: 1rem;
  color:#555555;
  border-top: 1px solid #cccccc;
}

.course-title .progress{
  float: right;
  color: lightblue;
}
.course-detail .mt-progress{
  height: 2px;
}
</style>
