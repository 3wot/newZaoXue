<template>
  <div class="pic-img-content">
      <div v-for="(item,index) in pics" v-if="pics.length>1" class="img-outer">
        <div class="img-iner">
          <img class="" @click="openImg(index)" :src="item+'?imageView2/1/w/148/h/148/q/75|imageslim'"/>
        </div>
      </div>

      <div v-if="pics.length==1">
        <img :src="pics[0]+'?imageView2/1/w/148/h/148/q/75|imageslim'" style="width:50%;height:50%;">
      </div>


      <div style="clear:both;"></div>


      <div class="full-img" v-if="hasClick">
        <mt-swipe :auto="0" :default-index="defaultIndex">
          <mt-swipe-item v-for="item in pics" :key="item.index">
              <img @click="closeImg" class="full-img-in" :src="item+'?imageView2/1/w/360/h/640'">
          </mt-swipe-item>
        </mt-swipe>

      </div>
  </div>
</template>

<script>

export default {

  name: 'PicImgContent',
  props: ['pics'],
  methods: {
    openImg(idx) {
      this.hasClick = true
      this.defaultIndex = idx
    },
    closeImg() {
      this.hasClick = false
    }
  },
  data () {
    return {
      hasClick: false,
      defaultIndex: 0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pic-img-content{
  width: 100%;
  height: auto;
  margin:5px 0px;
}
.pic-img-content .img-outer{
  width: 32%;
  padding-top: 32%;
  display: inline-block;
  margin-right: 1.3%;
  position: relative;
}
.pic-img-content .img-outer .img-iner{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.pic-img-content .img-iner img{
  height: 100%;
  width: 100%;
}
.pic-img-content .full-img {
  position:fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 99;
  background-color: #000; 
}
.pic-img-content .full-img-in {
  position:relative;
  height: 100%;
  width: 100%;
}
.pic-img-content .mint-swipe-indicator {
  background: #333;
}
.pic-img-content .mint-swipe-indicator.is-active{
  background: #ffffff;
}
</style>
