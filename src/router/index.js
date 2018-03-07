import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SSQ from '@/components/SSQ'
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
    }

  ],
  mode : 'history'

})
