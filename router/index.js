import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from '@/components/Log'
import Reg from '@/components/Reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
