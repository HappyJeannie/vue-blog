import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Register from '@/pages/Register/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Create from '@/pages/Create/template.vue'
import Edit from '@/pages/Edit/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: Edit,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
        requiresAuth:true
      }
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.path === '/forbidden') {
    next(false)
  } else {
    next()
  }
})

export default router;