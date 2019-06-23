import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* Layout */
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {title: 'Dashboard'}
        },
        {
          path: '/staff',
          name: 'Staff',
          component: () => import('@/components/Staff'),
          meta: {title: 'Staff'}
        }
      ]
    }
    /* {path: '/staff', component: () => import('@/components/Staff')} */
  ]
})
