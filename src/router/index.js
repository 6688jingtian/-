import Vue from 'vue'
import Router from 'vue-router'

import Banana from '@/components/banana'
import Apple from '@/components/apple'
import Ok from '@/components/ok'
import Lunbo from '@/components/lunbo'
// require styles
Vue.use(Router)

const router =  new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Lunbo
    },
    {
      path: '/apple',
      name: 'Apple',
      component: Apple,
      children:[
	      {
	      	  path:'ok',
	      	  component: Ok
	      }
      ]
    },
    {
      path: '/banana',
      name: 'Banana',
      component: Banana
    }
  ]
});

//路由守卫
router.beforeEach((to, from, next) => {
  //alert('路由守卫');
	console.log('路由改变');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile'];
  let isLogin = global.isLogin;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'home' });
    }
  }
  next();
});
export default router;