import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'

Vue.use(Router)

var router =  new Router({
  mode: 'history', 
  base: process.env.BASE_URL, // 取消地址栏显示 hash #
  routes: [ // 路由配置信息
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          name: 'list',
          component: List
        },
        {
          path: 'catogery',
          name: 'catogery',
          component: () => import('./views/Catogery.vue')
        },
        {
          path: 'goods',
          name: 'goods',
          component: () => import('./views/Goods.vue')
        }
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/Personal.vue'),
      meta: { // 自定义规则
        auth: true // 设置为true的路由是需要权限的
      }
    },
    {
      path: '/asidebar',
      name: 'asidebar',
      component: () => import('./components/Asidebar.vue')
    },
    {
      path: '/findmore',
      name: 'findmore',
      component: () => import('./components/Findmore.vue')
    },
    {
      path: '/shoppingcar',
      name: 'shopping-car',
      component: () => import('./views/ShoppingCar.vue')
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: () => import('./components/Carousel.vue')
    },
    {
      path: '*',
      redirect: '/home' // 其他未定义的路由重定向到 home 页
    }
  ]
})


// 前端路由拦截

router.beforeEach(function (to, from, next) {
  // 获取 token
  let token = localStorage.getItem('token')

  // 判断即将访问的路由是否需要权限
  if(to.meta.auth) {
    if(token) {
    next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath //将要跳转的路由作为参数，登陆成功后直接跳转到该路由
        }
      })
    }
  } else {
    next()
  }
})
export default router