import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/Index/template.vue'
// import Login from '@/pages/Login/template.vue'
// import Register from '@/pages/Register/template.vue'
// import Detail from '@/pages/Detail/template.vue'
// import Create from '@/pages/Create/template.vue'
// import Edit from '@/pages/Edit/template.vue'
// import User from '@/pages/User/template.vue'
// import My from '@/pages/My/template.vue'
import store from './../store'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index/template.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login/template.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/Register/template.vue')
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: () => import('@/pages/Detail/template.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/pages/Create/template.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: () => import('@/pages/Edit/template.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: () => import('@/pages/User/template.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/pages/My/template.vue'),
      meta:{
        requiresAuth:true
      }
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if(to.matched.some(record => record.meta.requiresAuth)){
    store.dispatch('checkLogin').then((isLogin) => {
      if(!isLogin){
        next({
          path:'/login',
          query:{redirect:to.fullPath}
        })
      }else{
        next()
      }
    })
  }else{
    next();
  }
})

export default router;