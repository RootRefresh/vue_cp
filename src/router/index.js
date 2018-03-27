import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SSQ from '@/components/SSQ'
import PL3 from '@/components/PL3'
import Buy from '@/components/Buy/Buy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ssq',
      name: 'SSQ',
      component: SSQ
    },
    {
      path: '/pl3',
      name: 'PL3',
      component: PL3
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    }

  ]
  // mode: 'history'

})
