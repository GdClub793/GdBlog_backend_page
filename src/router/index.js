import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/login'
import BackendManager from 'components/backend-manager/backend-manager'
import UserManager from 'components/user-manager/user-manager'
import MenuManager from 'components/menu-manager/menu-manager'
import DataStatistics from 'components/data-statistics/data-statistics'
import RoleManager from 'components/role-manager/role-manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/backend-manager/:name',
      component: BackendManager,
      children: [
        {
          path: 'data-statistics',
          component: DataStatistics
        },
        {
          path: 'menu-manager',
          component: MenuManager
        },
        {
          path: 'role-manager',
          component: RoleManager
        },
        {
          path: 'user-manager',
          component: UserManager
        }
      ]
    }
  ]
})
