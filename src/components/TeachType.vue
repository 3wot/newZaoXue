
<template>
  <div class="teach-type">
      <!-- 顶部 -->
	  <mt-header fixed :title="$route.params.typeName">
	  	  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>

	  </mt-header>

	  <div class="content-in">
	  	
	  	<div class="m-sm radius" v-for="item in teachCourseList">
			<div class="panel">
        
				<router-link :to="{ name: 'teachdetail', params: { id: item.id }}">
					<div class="panel-in">
				  		<img :src="item.logo_pic">
				  		<div class="font-bottom">
				  			<h4 class="font-white font-1e panel-b-title">{{item.title}}</h4>
				  		</div>
				  	</div>
				</router-link>
	  	</div>	
		</div>
		
	  </div>



  </div>
</template>

<script>
import { Header } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'
import WXShare from '../router/wxshare'

export default {
  components:{
    Header
  },
  name: 'TeachType',
  mounted() {
    const that = this;
    const id = this.$route.params.id;
    if(id){
      this.getActivityList(id, function(d){
        if(d.flag){
          that.teachCourseList = d.data
        }
      })
    }
    const uurl = location.href.split('#')[0]
    WXShare.init({}, uurl)
  },
  methods:{
    getActivityList(id,callback) {
      const getActivityList = URLS.getURL('getActivityList');
      const param = {
        p: 1,
        type_id: id
      };
      $.get(getActivityList, param, function(data){
        callback(data);
      })
    }
  },
  data () {
    return {
      typeObj:{
      	practice:"社会实践",
      	science:"社会科学",
      	culture:"文化遗产"
      },
      teachCourseList:[]
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
