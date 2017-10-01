<template>
	<div>
		<sysHeader></sysHeader>
		<Row class="wrapperBody">
			<Col class="wrapperSideBar" :md="6" :lg="4">
				<sysSideBar></sysSideBar>
			</Col>
			<Col :md="18" :lg="20">
			<div class="wrapperContent">
				<router-view></router-view>
			</div>
			</Col>
		</Row>

	</div>
</template>
<script >
import {Row, Col} from 'iview';
import sysHeader from '../components/header.vue';
import sysSideBar from '../components/sideBar';
export default {
	components: {
		sysHeader,
		sysSideBar,
	}
};
</script>
<style lang="sass" scoped>
	.wrapperBody{
		min-height: 600px;
		margin: 40px 48px;
		background: #fff;
		.wrapperSideBar{
			min-height: 600px;
			border-right: 1px solid #e9e9e9;
			background: #495060;
		}
	}
	.wrapperContent{
		padding: 20px;
		width: 100%;
		height: 100%;
	}
</style>
