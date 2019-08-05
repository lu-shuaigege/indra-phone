import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const contentsRouter = [{
  path: '/',
  redirect: 'home',
},
{
  path: '/home',
  name: 'home',
  meta: {
    title: '主页'
  },
  component: () => import('./views/home/home.vue')
},
{
  path: '/about',
  name: 'about',
  meta: {
    title: '关于我们'
  },
  component: () => import('./views/about/about.vue')
},
{
  path: '/business',
  name: 'business',
  meta: {
    title: '业务介绍'
  },
  component: () => import('./views/business/business.vue')
},
{
  path: '/investment',
  name: 'investment',
  meta: {
    title: '业务介绍-影视节目投资'
  },
  component: () => import('./views/investment/investment.vue')
},
{
  path: '/success',
  name: 'success',
  meta: {
    title: '成功案例'
  },
  component: () => import('./views/success/success.vue')
},
{
  path: '/details',
  name: 'details',
  meta: {
    title: '成功案例详情'
  },
  component: () => import('./views/details/details.vue')
},
{
  path: '/contactus',
  name: 'contactus',
  meta: {
    title: '联系我们'
  },
  component: () => import('./views/contactus/contactus.vue')
},
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: contentsRouter
})
