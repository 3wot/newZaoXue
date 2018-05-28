<template>
  <div class="login">
    <img class="bg" src="../../static/login.jpg">

    <div class="content-in">
      

      <div style="">
            
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

            <mt-field label="图片验证" placeholder="请输入图片码" v-model="captcha">
                <img ref="imgCode" height="27px" width="90px" alt="图片验证" @click="getCodeImg">
            </mt-field>
            
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>

            <mt-field label="验证码" placeholder="请输入验证码" type="password" v-model="password">
                <mt-button size="small" @click.native="handleClick" :disabled="passwordTemp" type="primary">{{passwordText}}</mt-button>
            </mt-field>  

      </div>
      
      <mt-button @click.native="loginClick" :disabled="!hasSend" style="margin-top:1rem;" size="large" type="primary">注册</mt-button>
      <mt-button @click.native="gobackClick" style="margin-top:1rem;" size="large" type="primary">返回</mt-button>
      

    </div>




  </div>
</template>

<script>
import { Button } from 'mint-ui'
import { Field } from 'mint-ui'
import Router from 'vue-router'
import URLS from '../router/link'
import $ from 'jquery'
import { Toast } from 'mint-ui'

export default {
  components:{
    Button,Field
  },
  name: 'Login',
  data () {
    return {
      token: '',
      username: '',
      phone: '',
      password: '',
      captcha: '',
      hasSend: false,//标志是否请求过短信验证码
      passwordText: '发送验证码',
      passwordTemp: false
    }
  },
  mounted() {
    //自动获取一次图片码
    this.getCodeImg()
  },
  methods:{
    //点击发送验证码
    handleClick() {
      const that = this
      if(this.phone){//如果号码不为空
        if(this.captcha){
          const sendCodeMsg = URLS.getURL('sendCodeMsg');
          const params = {
            phone: this.phone,
            code: this.captcha
          }          
          $.get(sendCodeMsg, params, function(res){
            if(res.flag){
              that.hasSend = true
              that.countDown()// 发送成功，倒计时
            }else{//短信码失败
              Toast({
                message: res.mes,
                position: 'bottom',
                duration: 5000
              });
              // 获取失败，则刷新图片
              that.getCodeImg()
            }
          })
        }else{
          Toast({
            message: '请填写图片验证码',
            position: 'bottom',
            duration: 3000
          });  
        }
      }else{
        Toast({
          message: '请填写手机号码',
          position: 'bottom',
          duration: 3000
        });
      }
    },

    //获取token
    getToken(callback) {
      const getToken = URLS.getURL('getToken');
      $.get(getToken,function(data){
        callback(data);
      })
    },

    //倒计时
    countDown () {
      const that = this
      that.passwordTemp = true
      let num = 60
      const timer = setInterval(function(){
        that.passwordText = num + 'S'
        num = num - 1
        if(num === 0){
          that.passwordTemp = false
          that.passwordText = '发送验证码'
          clearInterval(timer)
        }
      },1000)
    },

    //点击登录
    loginClick() {
      let that = this;
      if(that.username && that.password){//如果用户名和短信验证码不空
          this.getToken(function(res){//先获取token
          if(res.flag){//token成功
            that.token = res.data.token;
            const data = {
              phone: that.phone,
              name: that.username,
              token: that.token,
              code_msg: that.password,
            }
            const url = URLS.getURL('RegUser');
            $.post(url,data,function(cres){
              if(cres.flag){//注册成功
                //获取用户信息
                const getUserInfo = URLS.getURL('getUserInfo');
                $.get(getUserInfo, function(ccres){
                  if(ccres.flag){
                    that.$router.go(-1);//哪里来的，跳回去
                  }else{
                    Toast({
                      message: ccres.mes,
                      position: 'bottom',
                      duration: 5000
                    });
                  }

                })
              }else{//注册失败
                Toast({
                  message: cres.mes,
                  position: 'bottom',
                  duration: 5000
                });
              }
            })
          }else{
            console.log("get token failed")
          }
        })
      }else{
        Toast({
          message: '请填写用户名和短信码',
          position: 'bottom',
          duration: 3000
        });
      }
    },

    gobackClick() {
      this.$router.go(-1);//哪里来的，跳回去
    },
    //获取图片
    getCodeImg() {
      const that = this
      const getCodeImg = URLS.getURL('getCodeImg');
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", getCodeImg, true);
      xmlhttp.responseType = "blob";
      xmlhttp.onload = function(){
          if (this.status == 200) {
              var blob = this.response;
              let img = that.$refs.imgCode
              img.onload = function(e) {
                  window.URL.revokeObjectURL(img.src);
              };
              img.src = window.URL.createObjectURL(blob);

              that.captcha = ''
          }
      }
      xmlhttp.send();
    }

  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login img.bg{
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
}
.login .content-in{
  padding: 20px;
}
.login .mint-cell{
  background-color: rgba(255,255,240,0.3);
}
.login .mint-button--small{
  height: 27px;
  border-radius: 0px;
}
.login .mint-cell-wrapper .mint-cell-title {
  width: 80px !important;
}

</style>
