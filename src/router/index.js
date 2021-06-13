import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/apps/home/home'
import Statistics from '@/views/apps/statistics/statistics'
import Settings from '@/views/apps/settings/settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/sonhos',
    },
    {
      path: '/sonhos',
      name: 'Home',
      component: Home,
    },
    {
      path: '/estatisticas',
      name: 'Estatistics',
      component: Statistics,
    },
    {
      path: '/configurações',
      name: 'Settings',
      component: Settings,
    },
  ],
})
