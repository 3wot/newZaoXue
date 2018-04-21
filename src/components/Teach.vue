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

  	<div class="panel">
  		<div class="panel-in">
  			<mt-swipe :auto="0">
  		  <mt-swipe-item>
  		  	<router-link to="/TeachDetail/001">
  		  		<img src="../../static/teach004.png">
  		  	</router-link>
  		  </mt-swipe-item>
  		  <mt-swipe-item>
          <router-link to="/TeachDetail/002">
  		  	<img src="../../static/teach005.png">
        </router-link>
  		  </mt-swipe-item>
  		  <mt-swipe-item>
          <router-link to="/TeachDetail/003">
  		  	<img src="../../static/teach006.png">
        </router-link>
  		  </mt-swipe-item>
  		</mt-swipe>
  		</div>
  	</div>


	<div class="m-sm radius">
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
    </div>

	 
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
    }
  },
  methods:{
    clickHandle(){
      this.$router.push({name:'search'});
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
