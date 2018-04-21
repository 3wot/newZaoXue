<template>
  <div class="index">

	<div :is="selectId"></div>



	<!-- 底部 -->
	<mt-tabbar v-model="selectId">
		<mt-tab-item id="Teach">
		  <img slot="icon" src="../assets/logo1.png">
		  教学活动
		</mt-tab-item>
	  <!-- </router-link> -->
	  <mt-tab-item id="Mate">
		<img slot="icon" src="../assets/logo2.png">
		同学圈
	  </mt-tab-item>
	  <mt-tab-item id="Course">
		<img slot="icon" src="../assets/logo3.png">
		课件
	  </mt-tab-item>
	  <mt-tab-item id="My" @click.native="clickMy">
		<img slot="icon" src="../assets/logo4.png">
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

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
	Header,Tabbar,TabItem,Teach,Mate,Course,My
  },
  name: 'Index',
  data () {
	return {
	  msg: 'Welcome to Your Vue.js App',
	  selectId: 'Teach'
	}
  },
  methods:{
	clickMy(){
        let that = this;
        const getUserInfo = URLS.getURL('getUserInfo')
        $.get(getUserInfo,function(data,status){
            if(data.flag){//如果登录成功


                this.selectId = 'My';
            }else{//未登录
                that.$router.push({name:'login'});
            }
        }) 
        



        // this.$router.push({name:'search'});
	}
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
