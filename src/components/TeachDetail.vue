<template>

  <div class="teach-detail">
  
  <div v-for="item in teachCourseList" :key="item.index" v-if="$route.params.id==item.id">
    
    <div class="panel">

          <div class="panel-in">
              <img :src="item.img">
              <div class="font-bottom">
                <h4 class="font-white font-1e panel-b-title">{{item.title}}</h4>


                <div class="panel-t-title">
                  <router-link to="/" slot="left">
                      <span style="line-height: 25px;
                          display: inline-block;
                          background-color: rgba(255, 255, 255, 0.701961);
                          border-radius: 25px;
                          width: 25px;
                          height: 25px;
                          padding: 4px;
                          text-align: center;
                          margin-top: 5px;" class="mintui mintui-back"></span>
                  </router-link>
                  <img src="../../static/star.png" style="margin:10px;float:right;width:25px;height:25px;">
                </div>
              </div>

              

          </div>

        </div>

        <div class="detail-content">
          <h4>
            <span>适合群体：</span>
            <span>{{item.for}}</span>
          </h4>
          <div class="detail-introduce font-8e">
          {{item.introduce}}
          
          </div>

          <div class="m-t-1e"></div>

        </div>

        <div class="cell-8e">
          <mt-cell :title="item.provider">
            
          </mt-cell>
        
          <!-- <mt-cell title="地址：北京市" to="/MapDetail/北京市海淀区清华大学" is-link value="详情"> -->
            <mt-cell :title="item.address" :to="{ name: 'mapdetail', params: { address: item.address }}" is-link value="详情">
            
          </mt-cell>

        </div>

        <mt-navbar v-model="selected">
          <mt-tab-item id="1">评论</mt-tab-item>
          <mt-tab-item id="2">温馨提示</mt-tab-item>
        </mt-navbar>

        
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" style="padding:1rem;">
            <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->

          </mt-tab-container-item>
          <mt-tab-container-item id="2" style="padding:1rem;">
            <pre>
              {{item.tip}}

            </pre>
              


          </mt-tab-container-item>
        </mt-tab-container>
        



  </div>  
    
  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'

export default {
  comments:{
    Cell,Navbar, TabItem
  },
  name: 'TeachDetail',
  mounted() {
    console.log(this.$route)
    
    
  },
  data () {
    return {
      teachCourseList:[
      	{
          id:'001',
      		title: "未来领袖成长营--城市生存大挑战",
      		img:'./static/teach004.png',
      		type:"practice",
      		price:180,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市中国国家博物馆",
          tip:"\n1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]

      	},
      	{
          id:'002',
      		title: "中国特种工艺制作非物质文化遗产--青铜器",
      		img:'./static/teach005.png',
      		type:"culture",
      		price:80,
          for:'18以内',
          introduce:'参观青铜器的制作过程，学习了解古代劳动人命的智慧。通过这里对我国悠久的历史，深厚的文化底蕴形成认知。',
          provider:"服务商：早学网旗舰店",
          address:"地址：山西省太原市省博物馆",
          tip:"\n1.一个便携式背包\n2.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'003',
      		title: "海洋馆一日参观",
      		img:'./static/teach006.png',
      		type:"science",
      		price:280,
          for:'18以内',
          introduce:'北京市海洋馆是以展示七大海洋生物为主。集科普，观赏，旅游，娱乐于一体的爱国主义教育基地。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市动物园",
          tip:"\n1.一个便携式背包\n2.一个收纳袋子\n3.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'004',
      		title: "舌尖上的美味--蔬菜的故事",
      		img:'./static/teach008.png',
      		type:"science",
      		price:598,
          for:'18以内',
          introduce:'舌尖上的中国，介绍了我国大江南北各地的美食，你知道吗，美食背后是一种种颜色种类各异的蔬菜，它们又有怎样的故事呢？',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市植物园",
          tip:"\n1.一个便携式背包\n2.一个收纳袋子\n3.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'005',
      		title: "儿童舞蹈夏令营",
      		img:'./static/teach007.png',
      		type:"practice",
      		price:480,
          for:'18以内',
          introduce:'炎炎夏日，您还在为孩子报各种补习班吗？累了大人，苦了孩子，何不让孩子试试舞蹈呢！',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市海淀区北京邮电大学",
          tip:"\n1.一个便携式背包\n2.一个收纳袋子",
          comments:[]
      	}
      ],
      selected:'1',
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
.panel-t-title{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  padding: 0px 1rem;
}
.font-1e{
  font-size: 1rem;
}
.font-8e{
  font-size: .8rem;
}
.m-t-1e{
  margin-top: 1rem;
}

.detail-introduce{
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4rem;
}
.detail-content{
  padding:0px 1rem 1rem;
}

.line-b{
  border-bottom: 1px solid #dddddd;
}

.mint-cell-allow-right::after{
  right: 5px !important;
}
.cell-8e .mint-cell-wrapper{
  font-size: .8rem;
}

</style>
