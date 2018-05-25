<template>
  <div class="course">

    <!-- 顶部 -->
    <mt-header fixed title="课件">

    </mt-header>


    <div class="content-in">
        
        <mt-navbar v-model="selected">
          <mt-tab-item v-for="item in titleList" :key="item.index" :id="item.id">{{item.name}}</mt-tab-item>
          <!-- <mt-tab-item id="2">AAAA</mt-tab-item> -->
        </mt-navbar>

        
        <mt-tab-container v-model="selected" style="border-top:1px solid #dddddd;margin-top:3px;">
          
          <mt-tab-container-item v-for="bitem in titleList" :key="bitem.index" :id="bitem.id">
            <div class="panel" v-for="item in courseList" v-if='item.category_id==bitem.id' :key="item.index">
              <router-link :to="{ name: 'coursedetail', params: { id: item.id,title: item.title }}">
                    <div class="panel-in">
                        <div class="panel-left">
                          <div class="left-img">
                            <img :src="item.img+'?imageView2/1/w/640/h/360'"/>
                          </div>
                        </div>

                        <div class="panel-right">
                           <p class="right-title">
                             {{item.introduce}}
                           </p>
                           <p style="margin:0px;">
                             <span class="right-span">{{item.writer_info.name}}</span>
                           </p>

                           <p class="price">
                             <span class="price-span" v-if="!item.isfree">¥ {{item.price}}</span>
                             <span class="free-span" v-if="item.isfree">免费</span>
                           </p>

                        </div>
                    </div>
                  </router-link>
            </div> 


          </mt-tab-container-item>



          <!-- <mt-tab-container-item id="1">
            
            <div class="panel" v-for="item in courseList" v-if='item.type=="PM"' :key="item.index">
              <router-link :to="{ name: 'coursedetail', params: { id: item.id }}">
                    <div class="panel-in">
                        <div class="panel-left">
                          <div class="left-img">
                            <img :src="item.img"/>
                          </div>
                        </div>

                        <div class="panel-right">
                           <p class="right-title">
                             {{item.introduce}}
                           </p>
                           <p style="margin:0px;">
                             <span class="right-span" v-if="item.isback">回放</span>
                           </p>

                           <p class="price">
                             <span class="price-span" v-if="!item.isfree">¥ {{item.price}}</span>
                             <span class="free-span" v-if="item.isfree">免费</span>
                           </p>

                        </div>
                    </div>
                  </router-link>
            </div> 

          </mt-tab-container-item> -->




        </mt-tab-container>

    </div>

  </div>
</template>

<script>
import { Header } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import { Toast } from 'mint-ui'
import URLS from '../router/link'
import $ from 'jquery'


export default {
  components:{
    Header,Navbar, TabItem,TabContainer, TabContainerItem
  },
  name: 'Course',
  mounted() {
    //自动获取一次图片码
    this.init()
  },
  methods:{
    init(){
      const that = this
      // 获取title
      const getCategoryList = URLS.getURL('getCategoryList');
      $.get(getCategoryList,function(res){
        if(res.flag){
          if(res.data && res.data.length){
            $.each(res.data,function(idx,val){
              if(idx==0){
                that.selected = val.id
              }
              that.titleList.push(val)
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
      // 获取课程
      const getLearnList = URLS.getURL('getLearnList');
      $.get(getLearnList,function(res){
        if(res.flag){
          if(res.data && res.data.length){
            $.each(res.data,function(idx,val){
              val.title = val.name
              val.introduce = val.name
              val.img = val.pic_url
              that.courseList.push(val)
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
  data () {
    return {
      selected:'',
      titleList:[],
      courseList:[
        {
          id:'course001',
          title: "摄影对产品的影响",
          img:'./static/course001.png',
          type:"PM",
          price:180,
          isfree:true,
          isback:false,
          introduce:'互联网时代，一个产品经理对于一个产品的重要性不言而喻，那么一个懂得摄影的产品经理对于产品又有什么样的影响呢？',
        },
        {
          id:'course002',
          title: "良好沟通的重要性",
          img:'./static/course002.png',
          type:"PM",
          price:4600,
          isback:true,
          isfree:false,
          introduce:'如何友好的沟通，如何沟通获取有用的信息，这是一个人人都关心的问题！',

        },
        {
          id:'course003',
          title: "JAVA的那些事",
          img:'./static/course003.png',
          type:"CD",
          price:8000,
          isback:true,
          isfree:false,
          introduce:'JAVA的各种生态，一个新手如何慢慢成长为大牛...',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.course{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}
.course .content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
  background-color: #fdfdfd;
}

.panel{
  width: 100%;
  padding-top: 30%;
  position: relative;
  border-bottom: 1px solid #dddddd;
  /*background-color: #dddddd*/
}
.panel .panel-in{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.panel .panel-in .panel-left{
  width: 50%;
  height: 100%;
  position: relative;
  float: left;
}
.panel .panel-in .panel-right{
  width: 50%;
  height: 100%;
  position: relative;
  float: right;
}
.panel .panel-in .panel-left .left-img{
  position: absolute;
  left: 1rem;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
}
.panel .panel-in .panel-left .left-img img{
  width: 100%;
  height: 100%;
}

.panel .panel-in .panel-right .right-title{
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.1rem;
  font-size: .8rem;
  margin-bottom: 5px;
}
.panel .panel-in .panel-right .right-span{
  border:1px solid lightblue;
  color: lightblue;
  font-size: .7rem;
  padding: 2px;
}
.panel .panel-in .panel-right .price{
  margin-top: 5px;
  font-size: 0.8rem;

}
.panel-right .price-span{
  color: red;
}
.panel-right .free-span{
  color: green;
}
</style>
