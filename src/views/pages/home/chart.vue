<template>
  <div id="chart" ref="chartt">
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
	name: 'chart',
  mounted() {
		// setInterval(function(){
		// 	var $dom = document.getElementById('chart');
		// 	if($dom){
		// 		initChart($dom);
		// 	}
		// }, 1000);
		var $dom = this.$refs.chartt;
		var myChart = echarts.init($dom);
		var option = {
			title: {
					text: '用户统计'
			},
			tooltip: {},
			legend: {
					data:['用户数']
			},
			xAxis: {
					data: ["今日新增用户","昨日新增用户","本月新增用户","上月新增用户","注册用户数"]
			},
			yAxis: {},
			series: [{
					name: '用户数',
					type: 'bar',
					data: [20, 36, 321, 264, 705]
			}]
		};
		myChart.setOption(option);
  },
}
</script>
<style lang="sass" scoped>
	#chart{
		padding: 20px 0;
		width: 700px;
		height: 560px;
		margin: 0 auto;
	}
</style>
