import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import iView from 'iview';
import './common/css/reset.css';
import App from './app.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
