<template>
  <div class="x-bar">
    <div :id="id" :option="option" :obj="chartObj"></div>
  </div>
</template>
<script>
//import exportCSV from '@/export-csv.js';
import HighCharts from 'highcharts';
export default {
  // 验证类型
	data() {
		return {
			chartObj:{}
		}
	},
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  watch: {
    option () {
      HighCharts.chart(this.id,this.option);
    }
  },
  mounted() {
    HighCharts.chart(this.id,this.option);
		this.chartObj=HighCharts.chart(this.id,this.option);
  }
}
</script>