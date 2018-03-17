import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SSQ from '@/components/SSQ'
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
      path: '/buy',
      name: 'Buy',
      component: Buy
    }

  ],
  mode: 'history'

})
