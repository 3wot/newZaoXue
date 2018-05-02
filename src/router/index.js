import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TeachType from '@/components/TeachType'
import TeachDetail from '@/components/TeachDetail'
import MapDetail from '@/components/MapDetail'
import MyCollection from '@/components/MyCollection'
import Search from '@/components/Search'
import Login from '@/components/Login'
import CourseDetail from '@/components/CourseDetail'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index/:type',
      name: 'index',
      component: Index
    },
    {
      path: '/teachtype/:id/:typeName',
      name: 'teachtype',
      component: TeachType
    },
    {
      path: '/teachdetail/:id',
      name: 'teachdetail',
      component: TeachDetail
    },
    {
      path: '/MapDetail/:address',
      name: 'mapdetail',
      component: MapDetail
    },
    {
      path: '/MyCollection',
      name: 'mycollection',
      component: MyCollection
    },
    {
      path: '/Search',
      name: 'search',
      component: Search
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/CourseDetail/:id',
      name: 'coursedetail',
      component: CourseDetail
    },
  ]
})
