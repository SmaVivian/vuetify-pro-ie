import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@views/About.vue'),
  //   meta: {
  //     authRequired: true
  //   }
  // },
  // {
  //   path: '/menu',
  //   name: 'menu',
  //   component: () => import('@views/Menu.vue')
  // },
  // {
  //   path: '/sign-in',
  //   name: 'signin',
  //   component: () => import('@views/Signin.vue')
  // },
  // {
  //   path: '/join',
  //   name: 'join',
  //   component: () => import('@views/Join.vue')
  // },
  {
    path: '/demo1',
    name: 'Demo',
    component: () => import('@views/demo/demo1.vue'),
    meta: { 
      title: '面包屑、flex布局',
      breadList: [{
        text: "首页",
        href: "/"
      }, {
        text: "系统设置",
        href: "/demo1"
      }, {
        text: "用户管理"
      }]
    }
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import('@views/demo/demo2.vue'),
    meta: { title: 'pc和移动端适配用flex+px' }
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: () => import('@views/demo/demo3.vue'),
    meta: { title: '分页列表' }
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: () => import('@views/demo/demo4.vue'),
    meta: { title: '提示框+移动端微信登录'},
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: () => import('@views/demo/demo5.vue'),
    meta: { title: 'tab列表+瀑布流' }
  },
  {
    path: '/demo/detail',
    name: 'demoDetail',
    component: () => import('@views/demo/detail.vue'),
    meta: { 
      title: '详情',
      breadList: [{
        text: "首页",
        href: "/"
      }, {
        text: "列表",
        href: "/demo1"
      }, {
        text: "详情",
        disabled: true
      }]
    }
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@views/home/index'),
    meta: { title: '首页' }
  },
  // {
  //   path: '/exhibition',
  //   name: 'exhibition',
  //   component: () => import('@views/exhibition/index'),
  //   meta: { title: '展览' }
  // },
  // {
  //   path: '/exhibition/detail',
  //   name: 'exhibitionDetail',
  //   component: () => import('@views/exhibition/detail'),
  //   meta: { 
  //     title: '展览详情',
  //     breadList: [{
  //       text: "首页",
  //       href: "/home"
  //     }, {
  //       text: "展览",
  //       href: "/exhibition"
  //     }, {
  //       text: "详情",
  //       disabled: true
  //     }]
  //  }
  // },
  // {
  //   path: '/collect',
  //   name: 'collect',
  //   component: () => import('@views/collect/index'),
  //   meta: { title: '馆藏' }
  // },
  // {
  //   path: '/collect/detail',
  //   name: 'collectDetail',
  //   component: () => import('@views/collect/detail'),
  //   meta: { 
  //     title: '馆藏详情',
  //     breadList: [{
  //       text: "首页",
  //       href: "/home"
  //     }, {
  //       text: "馆藏",
  //       href: "/collect"
  //     }, {
  //       text: "镇馆之宝",
  //       disabled: true
  //     }]
  //  }
  // },
  // {
  //   path: '/activity',
  //   name: 'activity',
  //   component: () => import('@views/activity/index'),
  //   meta: { title: '社教活动' }
  // },
  // {
  //   path: '/activity/detail',
  //   name: 'activityDetail',
  //   component: () => import('@views/activity/detail'),
  //   meta: { 
  //     title: '活动详情',
  //     breadList: [{
  //       text: "首页",
  //       href: "/home"
  //     }, {
  //       text: "社教活动",
  //       href: "/activity"
  //     }, {
  //       text: "活动详情",
  //       disabled: true
  //     }]
  //  }
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@views/login/index.vue'),
  //   meta: { title: '登录' }
  // },
  // {
  //   path: '/link/friend',
  //   name: 'linkFriend',
  //   component: () => import('@views/other/link-friend.vue'),
  //   meta: { 
  //     title: '友情链接',
  //     breadList: [{
  //       text: "首页",
  //       href: "/home"
  //     }, {
  //       text: "友情链接",
  //       disabled: true
  //     }]
  //   }
  // },
  // {
  //   path: '/link/copyright',
  //   name: 'linkCopyright',
  //   component: () => import('@views/other/link-copyright.vue'),
  //   meta: { 
  //     title: '版权声明',
  //     breadList: [{
  //       text: "首页",
  //       href: "/home"
  //     }, {
  //       text: "版权声明",
  //       disabled: true
  //     }]
  //   }
  // },
  // {
  //   path: '/link/privacy',
  //   name: 'linkPrivacy',
  //   component: () => import('@views/other/link-privacy.vue'),
  //   meta: { 
  //     title: '隐私政策',
  //     breadList: [{
  //       text: "首页",
  //       href: "/home"
  //     }, {
  //       text: "隐私政策",
  //       disabled: true
  //     }]
  //   }
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
