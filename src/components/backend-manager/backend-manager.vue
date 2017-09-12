<template>
  <div class="backend-manager">
    <v-header></v-header>
    <Row>
      <Col span="3">
      <manager-nav :managements="managements"></manager-nav>
      </Col>
      <Col span="21">
      <router-view class="backend-content"></router-view>
      </Col>
    </Row>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import ManagerNav from 'components/manager-nav/manager-nav'

  export default {
    data () {
      return {
        managements: [
          {
            name: 'data-management',
            type: 'stats-bars',
            text: '数据管理',
            sub: [
              {
                name: 'data-statistics',
                text: '数据统计',
                url: '/backend-manager/monster/data-statistics'
              }
            ]
          },
          {
            name: 'system-management',
            type: 'cube',
            text: '系统管理',
            sub: [
              {
                name: 'menu-management',
                text: '菜单管理',
                url: '/backend-manager/monster/menu-manager'
              },
              {
                name: 'role-management',
                text: '角色管理',
                url: '/backend-manager/monster/role-manager'
              }
            ]
          },
          {
            name: 'users-management',
            type: 'stats-bars',
            text: '用户管理',
            sub: [
              {
                name: 'user-management',
                text: '用户管理',
                url: '/backend-manager/monster/user-manager'
              }
            ]
          }
        ]
      }
    },
    components: {
      VHeader,
      ManagerNav
    },
    methods: {}
  }
</script>

<style scoped lang="scss">

</style>
