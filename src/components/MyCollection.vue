
<template>
  <div class="my-collection">
      <!-- 顶部 -->
	  <mt-header fixed title="我的收藏">
	  	  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>

	  </mt-header>

	  <div class="content-in">
	  	

      <mt-cell v-for="item in collections" :key="item.index"
        :title="item.title"
        :to="{ name: item.path, params: { id: item.id }}"
        :label="item.introduce"
        is-link
        value="">
      </mt-cell>
		
	  </div>



  </div>
</template>

<script>
import { Header } from 'mint-ui'

export default {
  components:{
    Header
  },
  name: 'MyCollection',
  data () {
    return {
      collections:[
        {
          id:'001',
          title:"城市生存大挑战",
          time:"2018-01-08 18:00:04",
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱。',
          ctype:'activity',
          path:'teachdetail'
        },
        {
          id:'002',
          title:"峡谷历险",
          time:"2018-03-08 08:00:04",
          introduce:'今天我们将让你您的孩子拿着简单行李，完成一系列的峡谷生存挑战。',
          ctype:'activity',
          path:'teachdetail'
        }


      ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.my-collection .content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
  background-color: #fdfdfd;
  padding:0px 20px;
}
.my-collection .mint-cell .mint-cell-label{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 1.4rem;
}


</style>
