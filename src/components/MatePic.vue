<template>
  <div class="mate-pic">
    <div class="mate-left">
      <img class="img-r-70" :src="pic.img">
    </div>

    <div class="mate-right">
      <p class="font-1e pic-name">{{pic.name}}</p>
      <p class="font-1e pic-content">{{pic.content?pic.content:'&nbsp;'}}</p>
      
      <PicImgContent :pics="pic.imglist"></PicImgContent>

      <div class="pic-date">
        <span class="font-8e font-b">{{pic.time?pic.time:'&nbsp;'}}</span>
        <img src="../../static/ok.png" @click="zan(pic)" class="pic-zan pull-right">
      </div>

      <div class="pic-comment-list">
        <img src="../../static/ok.png" class="pic-zan">
        <span class="font-8e pic-name" v-for="(val,index) in pic.commentList" v-if="val.temp" :key="index">{{index==0?""+val.username:","+val.username}}
        </span>
        <!-- <span>{{pic.commentList}}</span> -->
      </div>



    </div>


    <div style="clear:both;height:0px;"></div>

  </div>
</template>

<script>
import PicImgContent from '@/components/PicImgContent'

export default {
  components:{
    PicImgContent
  },
  name: 'MatePic',
  props: ['pic'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    zan(item){
      this.$emit('zan');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mate-pic{
  padding: 10px;
  margin: 5px 0px;
}
.mate-pic .mate-left{
  width: 3rem;
  float: left;
}
.mate-pic .mate-left img{
  width: 3rem;
  height: 3rem;
}
.mate-pic .mate-right{
  width:calc(100% - 20px - 3rem);
  float: left;
  padding-left: 10px;
}
.font-1e{
  font-size: 1em;
}
.mate-pic p{
  margin: 0px;
}
.pic-name{
  color:#999999;
  margin-bottom: .7rem !important;
}
.pic-content{
  color: #000000;
}
.font-8e{
  font-size: .8rem
}
.font-b{
  color: #bbbbbb;
}
.pic-zan{
  height: .8rem;
  width: 1rem;
  
}
.pull-right{
  float: right;
}
.pic-comment-list{
  background-color: #dddddd;
  padding:3px 5px;
}

</style>
