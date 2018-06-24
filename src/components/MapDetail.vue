<template>
  <div class="teach-type">
      <!-- 顶部 -->
	  <mt-header fixed :title="$route.params.address">
	  	  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		    
		  </router-link>

	  </mt-header>

	  <div id="map" class="content-in">


	  </div>



  </div>
</template>

<script>
import { Header } from 'mint-ui'
import $ from 'jquery'
import WXShare from '../router/wxshare'

export default {
  components:{
    Header
  },
  name: 'MapDetail',
  data () {
    return {
      
    }
  },
  mounted: function () {
  	this.loadScript();
  	// console.log(this.$route.params.address);
  	setTimeout(function(){
  		this.initialize(this.$route.params.address);

  	}.bind(this), 1000);
    
    const uurl = location.href.split('#')[0]
    WXShare.init({}, uurl)
  },
  methods:{
  	
	fnA(){
		console.log('bbbbbb');

  	},
  	initialize:function(address) {
  	  // var ua = "/baiduApi?address=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%8A%E5%9C%B0%E5%8D%81%E8%A1%9710%E5%8F%B7&output=json&ak=SopTHpjVMmHOaVUFKlyPScIxZNCjspTF&callback=showLocation";
  	  // var url = "/baiduApi";
  	  // var data = {
  	  // 	address:'%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%8A%E5%9C%B0%E5%8D%81%E8%A1%9710%E5%8F%B7',
  	  // 	output:'json',
  	  // 	ak:"SopTHpjVMmHOaVUFKlyPScIxZNCjspTF",
  	  // };
  	  // $.get(url,data,function(res){
  	  // 	console.log(res);
  	  // });
	  let mp = new BMap.Map('map');
	  // mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);  
	  mp.centerAndZoom(address, 17); 
	},
	loadScript:function() {

	  let script = document.createElement("script");  
	  script.src = "http://api.map.baidu.com/api?v=2.0&ak=SopTHpjVMmHOaVUFKlyPScIxZNCjspTF&callback=initialize";
	  document.body.appendChild(script);  
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
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
  background-color: #fdfdfd;
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
.font-1e{
	font-size: 1rem;
}
</style>
