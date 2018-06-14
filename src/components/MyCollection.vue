
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
        :to="{ name: item.path, params: { id: item.key_id }}"
        is-link
        value="">
      </mt-cell>
		
	  </div>



  </div>
</template>

<script>
import { Header } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'
import WXShare from '../router/wxshare'

export default {
  components:{
    Header
  },
  name: 'MyCollection',
  mounted() {
    this.getMyFavourite()

    WXShare.init({})
  },
  methods: {
    getMyFavourite() {
      const that = this
      const getUserInfo = URLS.getURL('getUserInfo')
      $.get(getUserInfo,function(data){
        if(data.flag){
          const user_id = data.data['id']
          const option = {
            user_id
          }
          const getFavoriteList = URLS.getURL('getFavoriteList');
          $.get(getFavoriteList, option, function(res){
            if(res.flag){
              if(res.data && res.data.length){
                $.each(res.data, function(idx,val){
                  val.type = val.key_type
                  val.title = val.key_info.title
                  val.path = 'teachdetail'
                  that.collections.push(val)
                })
              }
            }else{
              Toast({
                message: res.mes,
                position: 'bottom',
                duration: 3000
              });
            }
          })
        }

      })
      
    },


  },
  data () {
    return {
      collections:[
        // {
        //   id:'001',
        //   key_id:'',
        //   title:"城市生存大挑战",
        //   time:"2018-01-08 18:00:04",
        //   introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱。',
        //   type:'activity',
        //   path:'teachdetail'
        // }
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
  padding:0px;
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
