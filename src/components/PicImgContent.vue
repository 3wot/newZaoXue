<template>
  <div class="pic-img-content">
      <div v-for="item in pics" v-if="pics.length>1" class="img-outer">
        <div class="img-iner">
          <img class="" :src="item+'?imageView2/2/w/148'"/>
        </div>
      </div>

      <div v-if="pics.length==1">
        <img :src="pics[0]+'?imageView2/2/w/148'" style="width:50%;height:50%;">
      </div>


      <div style="clear:both;"></div>

  </div>
</template>

<script>

export default {

  name: 'PicImgContent',
  props: ['pics'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.img-outer .img-iner{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
.img-iner img{
  height: 100%;
  width: 100%;
}

</style>
