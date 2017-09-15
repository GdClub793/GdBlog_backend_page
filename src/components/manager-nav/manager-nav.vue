<template>
  <div class="manager-nav">
      <Menu @on-select="_select" class="nav-menu">
        <Submenu v-for="item in managements" :name="item.name" :key="item.name">
          <template slot="title">
            <Icon :type="item.type"></Icon>
            {{item.text}}
          </template>
          <MenuItem v-for="sub in item.sub" :name="sub.url" :key="sub.name">{{sub.text}}</MenuItem>
        </Submenu>
      </Menu>
  </div>
</template>

<script>
  export default {
    props: {
      managements: Array,
    },
    data() {
      return {
      };
    },
    methods: {
      _select(name) {
        this.$router.push(name);
      },
    },
  };
</script>

<style scoped lang="scss">
  .manager-nav {
    .nav-menu {
      height: 500px;
    }
  }
</style>
