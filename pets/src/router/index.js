import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
