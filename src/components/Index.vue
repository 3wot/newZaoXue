<template>
  <div class="index">

	<div :is="selectId"></div>



	<!-- 底部 -->
	<mt-tabbar v-model="selectId">
		<mt-tab-item id="Teach" @click.native="clickTeach">
		  <img slot="icon" src="../../static/logo1.png">
		  教学活动
		</mt-tab-item>
	  <!-- </router-link> -->
	  <mt-tab-item id="Mate" @click.native="clickMate">
		<img slot="icon" src="../../static/logo2.png">
		同学圈
	  </mt-tab-item>
	  <mt-tab-item id="Course" @click.native="clickCourse">
		<img slot="icon" src="../../static/logo3.png">
		课件
	  </mt-tab-item>
	  <mt-tab-item id="My" @click.native="clickMy">
		<img slot="icon" src="../../static/logo4.png">
		我的
	  </mt-tab-item>
	</mt-tabbar>

  </div>
</template>

<script>
import { Header } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import Teach from '@/components/Teach'
import Mate from '@/components/Mate'
import Course from '@/components/Course'
import My from '@/components/My'
import $ from 'jquery'
import URLS from '../router/link'
import WXShare from '../router/wxshare'

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
	Header,Tabbar,TabItem,Teach,Mate,Course,My
  },
  name: 'Index',
  data () {
	return {
	  selectId: 'Teach'
	}
  },
  mounted() {
  	if(this.$route.params.type){
  		this.selectId = this.$route.params.type;
  	}
  	const uurl = location.href.split('#')[0]
    WXShare.init({}, uurl)
  },
  methods:{
	clickMy(){
        let that = this;
        const getUserInfo = URLS.getURL('getUserInfo')
        $.get(getUserInfo,function(data,status){
            that.$router.push({path:'/index/My'});
            if(data.flag){//如果登录成功
            	console.log('登录成功')
            	that.userInfo.set(data.data);
            }else{//未登录	
            	console.log('没有登录')
                that.$router.push({path: '/Login',});
            }
        })
	},
	clickTeach() {
		this.$router.push({path:'/index/Teach'});
	},
	clickMate() {
		this.$router.push({path:'/index/Mate'});
	},
	clickCourse() {
		this.$router.push({path:'/index/Course'});
	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  height: 100%;
  width:100%;
  padding: 0px;
  margin: 0px;
}

</style>
