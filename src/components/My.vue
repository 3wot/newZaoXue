<template>
  <div class="my">

    <div class="panel">
        <div class="panel-in">
          <img src="../../static/bg.png">
          <div class="font-middle">
            <img class="img-r-70" src="../../static/p001.png">
            <!-- <h2 class="font-white">登录</h2> -->
          </div>
        </div>
    </div>

    <div>
      
        <mt-cell title="我的收藏" is-link to="/MyCollection">
          <!-- <span></span> -->
          <img slot="icon" src="../../static/logo.png" width="24" height="24">
        </mt-cell>

    </div>


  





  </div>
</template>

<script>

export default {
  name: 'My',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}
.my .panel{
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
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
}
.img-r-70{
  height: 70px !important;
  width: 70px !important;
  border-radius: 50%;
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
    flex-direction: column ;
    justify-content: center;
}
.font-white{
  color: #ffffff;
}
.line-b{
  border-bottom: 1px solid #dddddd;
}


</style>
