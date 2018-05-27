// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
// frozenui
// import '@/style/frozenui.css'
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import router from './router'

Vue.use(MintUI)

Vue.prototype.userInfo = {
	name:'夏天',
	uid:"xiatian",
  phone:'',
  set(data) {
    this.name = data.name;
    this.phone = data.phone;
    this.uid = data.dep_id;
    this.id = data.id;
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
  	user:{
  		name:'jjw'
  	}
  }
})
