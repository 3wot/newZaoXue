<template>
  <div class="teach">

  <!-- 顶部 -->
<!--   <mt-header title="">
  	
    <span>sdasdaweqwe</span>


  </mt-header> -->
  <div @click="clickHandle">
    <mt-search
      v-model="searchText"
      cancel-text="取消"
      placeholder="喜欢的主题活动">
    </mt-search>
  </div>
    


  <div class="content-in">

  	<div class="panel" v-if="TopActivity.length">
  		<div class="panel-in">
  			<mt-swipe :auto="0">
    		  <mt-swipe-item v-for="item in TopActivity" :key="item.index">
            <router-link :to="{ name: 'teachdetail', params: { id: item.id }}">
    		  		<img :src="item.logo_pic+'?imageView2/1/w/640/h/360/q/75|imageslim'">
    		  	</router-link>
    		  </mt-swipe-item>
  		</mt-swipe>
  		</div>
  	</div>


    <div v-for="item in teachArr" :key="item.index" class="m-sm radius">
      <div class="panel">
        <router-link :to="{ name: 'teachtype', params: { id: item.id,typeName: item.type_name }}">
          <div class="panel-in">
            <img :src="item.type_pic">
            <div class="font-middle">
              <h3 class="font-white text-center">{{item.type_name}}</h3>
            </div>
          </div>
        </router-link>
      </div>  
    </div>

<!-- 	<div class="m-sm radius">
		<div class="panel">
			<router-link to="/teachtype/practice">
				<div class="panel-in">
			  		<img src="../../static/teach001.png">
			  		<div class="font-middle">
			  			<h3 class="font-white text-center">社会实践</h3>
			  		</div>
			  	</div>
			</router-link>
	  	</div>	
	</div>
		
    <div class="m-sm radius">
      <div class="panel">
      	<router-link to="/teachtype/science">
          <div class="panel-in">
            <img src="../../static/teach002.png">
            <div class="font-middle">
              <h3 class="font-white text-center">社会科学</h3>
            </div>
          </div>
        </router-link>
      </div>  
    </div>

    <div class="m-sm radius">
      <div class="panel">
      	<router-link to="/teachtype/culture">
          <div class="panel-in">
            <img src="../../static/teach003.png">
            <div class="font-middle">
              <h3 class="font-white text-center">文化遗产</h3>
            </div>
          </div>
        </router-link>
      </div>  
    </div> -->



	 
   </div>
  
    





  </div>
</template>

<script>
import Router from 'vue-router'
import { Header } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Cell } from 'mint-ui'
import { Search } from 'mint-ui'
import { Toast } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'


// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
    Header,Tabbar,TabItem,Swipe,SwipeItem,Cell,Search
  },
  name: 'Teach',
  data () {
    return {
      searchText:"",
      teachArr: [],
      TopActivity: [],
    }
  },
  mounted() {
    const that = this
    this.getActivityType(function(d){
      if(d.flag){
        that.teachArr = d.data
      }else{
        Toast({
          message: d.mes,
          position: 'bottom',
          duration: 3000
        });
      }        
    })
    this.getTopActivityList(function(d){
      if(d.flag){
        if(d.data && d.data.length){
          $.each(d.data,function(idx,val){
            that.TopActivity.push(val)
          })
        }
      }else{
        Toast({
          message: d.mes,
          position: 'bottom',
          duration: 3000
        });
      }        
    })
  },
  methods:{
    clickHandle() {
      this.$router.push({name:'search'});
    },
    getActivityType(callback) {
      const getActivityType = URLS.getURL('getActivityType');
      $.get(getActivityType,function(data){
        callback(data);
      })
    },
    getTopActivityList(callback) {
      const getTopActivityList = URLS.getURL('getTopActivityList');
      $.get(getTopActivityList,function(data){
        callback(data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teach{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}
.teach .panel{
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
  top: 52px;
  bottom: 0px;
  overflow: auto;
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
.font-white{
	color: #ffffff;
}


</style>
