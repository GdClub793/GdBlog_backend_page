<template>
	<div class="sysSideBar">
		<Menu @on-select="jumpToRoute" :theme="theme" width="auto" :open-names="open" :active-name="active" ref="sidebar">
			<Submenu name="1">
				<template slot="title">
			  	<Icon type="stats-bars"></Icon>
					统计分析
				</template>
				<MenuItem  name="1-1">
				 用户统计
			 </MenuItem>
			</Submenu>
		  <Submenu name="2">
				<template slot="title">
						<Icon type="gear-a"></Icon>
						系统管理
				</template>
				<MenuItem name="2-1">菜单管理</MenuItem>
				<MenuItem name="2-2">用户管理</MenuItem>
				<MenuItem name="2-3">角色管理</MenuItem>
		  </Submenu>
			<Submenu name="3">
				<template slot="title">
						<Icon type="person-stalker"></Icon>
						用户管理
				</template>
				<MenuItem name="3-1">用户管理</MenuItem>
		  </Submenu>
	  </Menu>
	</div>
</template>
<script >
	let routeName = {
	 '1-1': '/dataStatistic',
	 '2-1': '/menuManage',
	 '2-2': '/userManage',
	 '2-3': '/roleManage'
 	};
	export default {
		data() {
      return {
        theme: 'dark',
				open: [''],
				active: ''
			}
    },
		mounted(){
			this.changeActiveName();
			this.$nextTick(function () {
				this.$refs.sidebar.updateActiveName();
				this.$refs.sidebar.updateOpened();

  		})
		},
		methods: {
			jumpToRoute: function(name){
				this.$router.push(routeName[name]);
			},
			changeActiveName: function(){
				let arr = [];
				for(var name in routeName){
					if(this.$route.path === routeName[name]){
						this.active = name;
						arr.push(name.split('-')[0]);
						this.open = arr;
					}
				}
			}
		}
  };
</script>
<style lang="sass" scoped>
</style>
