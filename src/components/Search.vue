
<template>
  <div class="search">
    
    <!-- 顶部 -->
    <div class="search-header">
      <router-link to="/" slot="left">
        <span style="line-height:52px;" class="mintui mintui-back"></span>
      </router-link>

      <div class="header-right">
        <mt-search
            v-model="searchText"
            cancel-text="取消"
            placeholder="喜欢的主题活动"
            >
        </mt-search>  
      </div>
      
    </div>

	  
    <!-- searchlist -->
	  <div class="content-in">
	  	
	  	<div class="m-sm radius" v-for="item in teachCourseList">
			<div class="panel">
				<router-link :to="{ name: 'teachdetail', params: { id: item.id }}">
					<div class="panel-in">
				  		<img :src="item.img">
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
import { Search } from 'mint-ui'
import { Toast } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'
import WXShare from '../router/wxshare'

export default {
  components:{
    Header,Search
  },
  name: 'Search',
  methods:{
    changeText(n){
      const that = this
      const getSearchActivityList = URLS.getURL('getSearchActivityList');
      const data = {
        p: 1,
        title: n+'',
      }
      $.get(getSearchActivityList, data, function(res){
        if(res.flag){
          if(that.teachCourseList && that.teachCourseList.length){
            that.teachCourseList = that.teachCourseList.splice(0,that.teachCourseList.length)
          }
          that.teachCourseList = []
          if(res.data && res.data.length){
            $.each(res.data,function(idx,val){
              val.img = val.logo_pic
              that.teachCourseList.push(val)
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
      
    },

  },
  mounted(){
    const uurl = location.href.split('#')[0]
    WXShare.init({}, uurl)
  },
  data () {
    return {
      searchText:'',
      teachCourseList:[
        // {
        //   id:'001',
        //   title: "未来领袖成长营--城市生存大挑战",
        //   img:'./static/teach004.png',
        //   type:"practice",
        //   price:180,
        //   for:'18以内',
        //   introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
        //   provider:"服务商：早学网旗舰店",
        //   address:"地址：北京市中国国家博物馆",
        //   tip:"\n1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
        //   comments:[]

        // },
        // {
        //   id:'002',
        //   title: "中国特种工艺制作非物质文化遗产--青铜器",
        //   img:'./static/teach005.png',
        //   type:"culture",
        //   price:80,
        //   for:'18以内',
        //   introduce:'参观青铜器的制作过程，学习了解古代劳动人命的智慧。通过这里对我国悠久的历史，深厚的文化底蕴形成认知。',
        //   provider:"服务商：早学网旗舰店",
        //   address:"地址：山西省太原市省博物馆",
        //   tip:"\n1.一个便携式背包\n2.一瓶矿泉水",
        //   comments:[]
        // },
        // {
        //   id:'003',
        //   title: "海洋馆一日参观",
        //   img:'./static/teach006.png',
        //   type:"science",
        //   price:280,
        //   for:'18以内',
        //   introduce:'北京市海洋馆是以展示七大海洋生物为主。集科普，观赏，旅游，娱乐于一体的爱国主义教育基地。',
        //   provider:"服务商：早学网旗舰店",
        //   address:"地址：北京市动物园",
        //   tip:"\n1.一个便携式背包\n2.一个收纳袋子\n3.一瓶矿泉水",
        //   comments:[]
        // },
        // {
        //   id:'004',
        //   title: "舌尖上的美味--蔬菜的故事",
        //   img:'./static/teach008.png',
        //   type:"science",
        //   price:598,
        //   for:'18以内',
        //   introduce:'舌尖上的中国，介绍了我国大江南北各地的美食，你知道吗，美食背后是一种种颜色种类各异的蔬菜，它们又有怎样的故事呢？',
        //   provider:"服务商：早学网旗舰店",
        //   address:"地址：北京市植物园",
        //   tip:"\n1.一个便携式背包\n2.一个收纳袋子\n3.一瓶矿泉水",
        //   comments:[]
        // },
        // {
        //   id:'005',
        //   title: "儿童舞蹈夏令营",
        //   img:'./static/teach007.png',
        //   type:"practice",
        //   price:480,
        //   for:'18以内',
        //   introduce:'炎炎夏日，您还在为孩子报各种补习班吗？累了大人，苦了孩子，何不让孩子试试舞蹈呢！',
        //   provider:"服务商：早学网旗舰店",
        //   address:"地址：北京市海淀区北京邮电大学",
        //   tip:"1.一个便携式背包\n2.一个收纳袋子",
        //   comments:[]
        // }
      ],
    }
  },
  watch:{
    searchText:function(n,o){
      if(n){
        this.changeText(n)
      }
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
  top: 52px;
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

.search{

}
.search-header{
  height: 52px;
  background-color: #d9d9d9;
  padding-left: 10px;
}
.header-right{
  position: absolute;
  left: 30px;
  top: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
