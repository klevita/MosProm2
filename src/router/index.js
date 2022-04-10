import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: {name: 'Home'}
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/demo',
      name: 'Demo',
      component: () => import('../pages/scum.vue')
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: () => import('../pages/NotFoundPage.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
