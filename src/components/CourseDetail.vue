<template>
  <div class="course-detail">
    

  <div class="content-in" v-for="item in courseList" v-if="$route.params.id==item.id">
      

      <div class="panel" >
          <div class="panel-in" v-if="!showVideo">
              <img :src="item.img">
            
              <div class="font-bottom">
                  <!-- <h4 class="font-white font-1e panel-b-title">{{item.title}}</h4> -->


                  <div class="panel-t-title">
                    <router-link to="/" slot="left">
                        <span style="line-height: 25px;
                            display: inline-block;
                            background-color: rgba(255, 255, 255, 0.701961);
                            border-radius: 25px;
                            width: 25px;
                            height: 25px;
                            padding: 4px;
                            text-align: center;
                            margin-top: 5px;" class="mintui mintui-back"></span>
                    </router-link>
                  </div>
              </div>

          </div>

          <div class="panel-in" v-if="showVideo">
            <video id="myVideo" :src="videoSrc" controls="controls"> 
              
            </video>

            <div class="panel-t-title">
              <router-link to="/" slot="left">
                  <span style="line-height: 25px;
                      display: inline-block;
                      background-color: rgba(255, 255, 255, 0.701961);
                      border-radius: 25px;
                      width: 25px;
                      height: 25px;
                      padding: 4px;
                      text-align: center;
                      margin-top: 5px;" class="mintui mintui-back"></span>
              </router-link>
            </div>

          </div>
      </div>

      <h3 class="course-title">
        <span>{{item.title}}</span>
        <span class="progress">{{item.progress}}%</span>
      </h3>
      <mt-progress :value="item.progress"></mt-progress>

      <div @click="clickCell(cc)" v-for="cc in item.childlist" :key="cc.index">
        <mt-cell :title="cc.title" is-link>
          <span style="color: green">{{cc.progress}}%</span>
        </mt-cell>  
      </div>
      



  </div>

  </div>
</template>

<script>
import Router from 'vue-router'
import { Cell } from 'mint-ui'
import { Progress } from 'mint-ui'
import $ from 'jquery'


export default {
  components:{
    Cell,Progress
  },
  name: 'CourseDetail',
  data () {
    return {
      showVideo:false,
      videoSrc:'',
      courseList:[
        {
          id:'course001',
          title: "摄影对产品的影响",
          img:'./static/course001.png',
          type:"PM",
          price:180,
          isfree:true,
          isback:false,
          introduce:'互联网时代，一个产品经理对于一个产品的重要性不言而喻，那么一个懂得摄影的产品经理对于产品又有什么样的影响呢？',
          progress:70,
          childlist:[
            {
              title:'产品的重要性',
              progress:100,
              link:'./static/course.mp4'
            },
            {
              title:'摄影那些事',
              progress:100,
              link:'./static/course.mp4'
            },
            {
              title:'产品&摄影',
              progress:35,
              link:'./static/course.mp4'
            }
          ]
        },
        {
          id:'course002',
          title: "良好沟通的重要性",
          img:'./static/course002.png',
          type:"PM",
          price:4600,
          isback:true,
          isfree:false,
          introduce:'如何友好的沟通，如何沟通获取有用的信息，这是一个人人都关心的问题！',
          progress:70,
          childlist:[
            {
              title:'好好说话',
              progress:100,
              link:'./static/course.mp4'
            },
            {
              title:'获取有用信息',
              progress:50,
              link:'./static/course.mp4'
            },
            {
              title:'如何沟通',
              progress:35,
              link:'./static/course.mp4'
            }
          ]

        },
        {
          id:'course003',
          title: "JAVA的那些事",
          img:'./static/course003.png',
          type:"CD",
          price:8000,
          isback:true,
          isfree:false,
          introduce:'JAVA的各种生态，一个新手如何慢慢成长为大牛...',
          progress:100,
          childlist:[
            {
              title:'JAVA基础',
              progress:100,
              link:'./static/course.mp4'
            },
            {
              title:'实战',
              progress:100,
              link:'./static/course.mp4'
            },
            {
              title:'成熟框架',
              progress:100,
              link:'./static/course.mp4'
            }
          ]
        }
      ]
      
    }
  },
  methods:{
    clickCell(cc){
      let url = cc.link;
      this.showVideo = true;
      this.videoSrc = url;
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
  padding: 0px 1rem;
  font-size: 1rem;
  color:#555555;
}
.course-title .progress{
  float: right;
  color: lightblue;
}
.course-detail .mt-progress{
  height: 2px;
}
</style>
