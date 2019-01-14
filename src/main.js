// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import VueCarousel from 'vue-carousel'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Lunbo from '@/components/lunbo';
import VueHighcharts from 'vue-highcharts';
import axios from 'axios';
import $ from 'jquery';
// import Qs from 'qs';

//QS是axios库中带的，不需要我们再npm安装一个
 
Vue.prototype.$http = axios;
// Vue.prototype.qs = Qs;
// import FileSaver from 'file-saver';
// import XLSX from 'xlsx';
//import aa from './exporting.js';
//var exportCSV = require('./exporting.js');

//exportCSV(VueHighcharts);
//console.log(Vue.prototype);
Vue.config.productionTip = false
Vue.use(VueHighcharts);
Vue.use(Vuex);
Vue.use(VueCarousel);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(iView);
Vue.use(ElementUI);
Vue.use(Lunbo);
// Vue.use(FileSaver);
// Vue.use(XLSX);
//Vue.use(aa);
/* eslint-disable no-new */
Vue.component('child', {
  template: 
  '<h1>全局注册</h1>'
},)
Vue.component('lunbo',Lunbo)
new Vue({
  el: '#app',
  router,
  components: { App ,Lunbo},
  template: '<App/>',
  methods:{
    moreChart() {
        var options = this.getMoreOptions(this.type);
        if (this.chart) {
            this.chart.destroy();
        };
    // 初始化 Highcharts 图表
    this.chart = new Highcharts.Chart('highcharts-more', options);
    }
  }
})

