import Vue from 'vue'
import Router from 'vue-router'
import OcLayout from '@/shared/layout'
import OcHome from '@/views/home'
import OcDetails from '@/views/details'

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: OcLayout,
      children: [
        {
          path: '/',
          name: 'OcHome',
          component: OcHome
        },
        {
          path: '/details',
          name: 'OcDetails',
          component: OcDetails
        }
      ]
    }
  ]
})
