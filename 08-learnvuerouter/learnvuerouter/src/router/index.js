// 导入vue-router
import Vue from 'vue'
import Router from 'vue-router'
// // 导入组件
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

// 1 注册vue-router
Vue.use(Router)

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const ProFile = () => import('../components/Profile')

// 2 创建VueRouter
const routes = [
  // 配置映射关系
  {
    // 默认路径
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    //name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    //name: 'About',
    meta: {
      title: '关于'
    },
    component: About
  },
  {
    path: '/user/:userId',
    //name: 'User',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: ProFile
  },
]

const router = new Router({
  routes,
  // 不使用默认的hash模式，使用h5的history模式
  mode: 'history',
  // 修改默认的active的class
  linkActiveClass: 'active'
})

// 路由守卫       前置钩子(跳转之前设置的函数)hook(钩子)
router.beforeEach((to, from, next) => {
  // 从form跳转到to     meta：元数据(描述数据的数据)
  document.title = to.matched[0].meta.title
  // 只有调用next()方法才能继续跳转
  next()
})
// 后置钩子(hook)
router.afterEach((to, from) => {
  
})

// 3 导出router
export default router


