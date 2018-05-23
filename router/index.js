import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/components/Log'
import Reg from '@/components/Reg'
import Index from '@/views/index/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Log',
      name: 'Log',
      component: Log
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
