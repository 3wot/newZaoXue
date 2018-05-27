<template>
  <div class="mate">
    
    <mt-header title="同学圈">
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

    <div class="content-in">
        <div class="panel">
            <div class="panel-in">
              <img src="../../static/bg.png">
              
              <img class="img-f-70 mate-img" :src="header_url">
              
            </div>
        </div>


        <MatePic v-for="(item,index) in pics" :pic="item" @zan="fnZan(index)" :key="item.index">
          
        </MatePic>

    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import MatePic from '@/components/MatePic'
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'

export default {
  components:{
    MatePic
  },
  name: 'Mate',
  mounted() {
    const that = this
    //自动获取一次图片码
    this.getPics()
    //加载当前用户
    const getUserInfo = URLS.getURL('getUserInfo')
    $.get(getUserInfo,function(data,status){
      if(data.flag){//如果登录成功
          that.header_url = data.data.header_url
        }
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      header_url: '../../static/p001.png',
      pics:[
        // {
        //   id:'001',
        //   name:'李金荣',
        //   img:'./static/p001.png',
        //   imglist:['./static/mate1-1.png','./static/mate1-2.png','./static/mate1-3.png','./static/mate1-4.png','./static/mate1-5.png','./static/mate1-6.png','./static/mate1-7.png','./static/mate1-8.png','./static/mate1-9.png'],
        //   content:'好风景！好风景！好风景！好心情！好心情！好心情！重要事情来三遍...',
        //   time:"2018-02-01 12:02:20",
        //   commentList:{
        //     '张静来':true,
        //     '高飞':true,
        //   }
        // },
        // {
        //   id:'002',
        //   name:'琪琪',
        //   img:'./static/p002.png',
        //   imglist:['./static/mate2-1.png'],
        //   content:'愿生命如烟花一般，刹那芳华，风采绽放！',
        //   time:"2018-02-01 12:06:20",
        //   commentList:{
        //     '阿达':true,
        //     '鱼王':true,
        //   }
        // },
        // {
        //   id:'003',
        //   name:'happy',
        //   img:'./static/p003.png',
        //   imglist:['./static/mate3-1.png','./static/mate3-2.png','./static/mate3-3.png','./static/mate3-4.png'],
        //   content:'请你一起来happy',
        //   time:"2018-02-01 12:08:20",
        //   commentList:{
        //     '小姐姐':true,
        //     '大飞':true,
        //   }
        // }
      ]
    }
  },
  methods:{
    getPics() {
      const that = this
      const getCricleList = URLS.getURL('getCricleList');
      $.get(getCricleList, function(res){
        if(res.flag){          
          if(res.data && res.data.length){
            $.each(res.data,function(idx,val){
              let { ...json } = { ...val }
              json.name = json.teacher_info.name
              json.img = json.teacher_info.head_img
              json.content = json.desc
              
              json.imglist = (function(){
                let imgArr = []
                $.each(json.img_group,function(cidx,cval){
                  imgArr.push(cval.url)
                })
                return imgArr
              }())
              json.commentList = []
              console.log(json.commentList,'ccc')
              $.each(json.like_list,function(cidx,cval){
                cval.temp = true
                json.commentList.push(cval)
              })
              console.log(json.commentList,'ddddd')
              
              that.pics.push(json)
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
    },
    fnZan(idx){
      const that = this

      const getUserInfo = URLS.getURL('getUserInfo')
      $.get(getUserInfo,function(data,status){
        if(data.flag){//如果登录成功
          that.userInfo.set(data.data);

          // 根据当前用户判断
          let user = that.userInfo;
          let newCommentList = that.pics[idx].commentList;
          const localUser = {
            "user_id": user.id,
            "username": user.name,
            "temp": true
          }
          
          let exist = false;
          $.each(newCommentList,function(i,v){
            if(v.user_id == localUser.user_id){
              exist = true
              v.temp = !v.temp
              newCommentList[i] = v
            }
          })

          if(!exist){// 如果不存在
            newCommentList.push(localUser)
          }

          that.pics[idx].commentList = newCommentList;
          let {...item} = that.pics[idx];
          that.pics.splice(idx,1,item);

        }else{//未登录 
          that.$router.push({path: '/Login',});
        }
      })

    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mate{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}
.mate .panel{
  width: 100%;
  padding-top: 45%;
  position: relative;
}
.panel .panel-in{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px; 
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
}
.panel img{
  width: 100%;
  height: 100%;
}
.font-middle{
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img-f-70{
  height: 4.5rem !important;
  width: 4.5rem !important;
}
.mate-img{
  position: absolute;
  bottom: -20px;
  right: 20px;
}
</style>
