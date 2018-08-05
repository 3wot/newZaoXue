<template>

  <div class="teach-detail">

  <!-- <div v-for="item in teachCourseList" :key="item.index" v-if="$route.params.id==item.id"> -->

    <div class="panel">

          <div class="panel-in">
              <img :src="item.img+'?imageView2/1/w/640/h/360'">
              <div class="font-bottom">
                <h4 class="font-white font-1e panel-b-title">{{item.title}}</h4>


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
                          margin-top: 5px;" @click="goBack" class="mintui mintui-back"></span>
                  <!-- </router-link> -->
                  <img @click="addOrDel" :src="exist ? '../../static/star1.png' : '../../static/star.png'" style="margin:10px;float:right;width:25px;height:25px;">
                </div>
              </div>



          </div>

        </div>

        <div class="detail-content">
          <h4>
            <span>适合群体：</span>
            <span>{{item.for?item.for:""}}</span>
          </h4>
          <!-- <div class="detail-introduce font-8e" v-html="item.introduce"> -->
          <!-- {{item.introduce}} -->
          <!-- </div> -->

          <div class="m-t-1e"></div>

        </div>

        <div class="cell-8e">
          <mt-cell :title="item.provider" :to="item.providerLink" is-link>
            <div slot="title" class="address-title">{{'服务商：'+ (item.provider?item.provider:'')}}</div>
            <!-- <div>联系客服</div> -->
          </mt-cell>

          <mt-cell :to="{ name: 'mapdetail', params: { address: item.address }}" is-link value="">
            <div slot="title" class="address-title">{{'地址：'+item.address}}</div>
          </mt-cell>

        </div>

        <mt-navbar v-model="selected">
          <mt-tab-item id="1">活动介绍</mt-tab-item>
          <mt-tab-item id="2">购买须知</mt-tab-item>
          <mt-tab-item id="3">温馨提示</mt-tab-item>
        </mt-navbar>


        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="container-item-inner" v-html="item.introduce">
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="container-item-inner" v-html="item.comments">
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class="container-item-inner" v-html="item.tip">
            </div>
          </mt-tab-container-item>
        </mt-tab-container>




  <!-- </div>   -->

  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'
import WXShare from '../router/wxshare'

export default {
  comments:{
    Cell,Navbar, TabItem
  },
  name: 'TeachDetail',
  mounted() {
    // 获取具体信息
    const that = this;
    const id = this.$route.params.id;
    if(id){
      this.getActivityInfo(id, function(d){
        if(d.flag){
          const rData = d.data
          that.item = {
            id: rData.id,
            title: rData.title,
            img: rData.logo_pic,
            type: rData.type_id,
            price: rData.price,
            for: rData.obj_info,
            introduce: rData.more.a_info,
            provider: rData.server_info.name,
            providerLink: "http://" + rData.server_info.url,
            address: rData.address,
            tip: rData.more.a_tips,
            comments: rData.more.a_buy_text,
          }
          const uurl = location.href.split('#')[0]
          // 分享
          WXShare.init({
            title: rData.title,
            imgUrl: rData.logo_pic,
          }, uurl)
        }
      })
    }
    // 检测收藏
    this.check()


  },
  methods:{
    getActivityInfo(id,callback) {
      const getActivityInfo = URLS.getURL('getActivityInfo');
      const param = {
        id: id
      };
      $.post(getActivityInfo, param, function(data){
        callback(data);
      })
    },
    check() {
      const that = this
      //加载当前用户
      const getUserInfo = URLS.getURL('getUserInfo')
      $.get(getUserInfo,function(data,status){
        if(data.flag){//如果登录成功
            const user_id = data.data['id']
            that.user_id = user_id
            const key_id = that.$route.params.id
            const key_type = 'activity'
            const option = { user_id, key_id, key_type }

            const check_exist = URLS.getURL('check_exist')
            $.get(check_exist, option,function(res){
              if(res.flag){
                if(res.data.is_exist === 2){ // 没收藏
                  that.exist = false
                }else if (res.data.is_exist === 1){ // 收藏
                  that.exist = true
                }
              }
            })
          }else{
            that.$router.push({path: '/Login',});
          }
      })

    },

    addOrDel() {
      const that = this
      const add = URLS.getURL('add')
      const del = URLS.getURL('del')
      const url = that.exist?del:add
      const option = {
        user_id: that.user_id,
        key_id: that.$route.params.id,
        key_type: "activity"
      }
      $.post(url, option,function(res){
        if(res.flag){
          that.exist = !that.exist
        }
        Toast({
          message: res.mes,
          position: 'bottom',
          duration: 3000
        });
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      item:{},
      exist: false,// 标志是否收藏
      selected:'1',
      user_id: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel{
  width: 100%;
  padding-top: 50%;
  position: relative;
}
.panel .panel-in{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.panel img{
  width: 100%;
  height: 100%;
}
.m-sm{
  margin: 10px;
}
.radius{
  border-radius: 7px;
  overflow: hidden;
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
.font-1e{
  font-size: 1rem;
}
.font-8e{
  font-size: .8rem;
}
.m-t-1e{
  margin-top: 1rem;
}

.detail-introduce{
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4rem;
/*  height: 4rem;
  overflow: scroll;*/
}
.detail-content{
  padding:0px 1rem;
}

.line-b{
  border-bottom: 1px solid #dddddd;
}

.mint-cell-allow-right::after{
  right: 5px !important;
}
.cell-8e .mint-cell-wrapper{
  font-size: .8rem;
}
.address-title {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 1.4rem;
  padding-left: 0.5rem;
}
.container-item-inner {
  margin: 1rem;
  font-size: 14px !important;
}
.container-item-inner>p>span{
  font-size: 14px !important;
}
</style>
