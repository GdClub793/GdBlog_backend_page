import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
//import echarts from 'echarts';
import 'iview/dist/styles/iview.css';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import './common/css/common.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
//Vue.use(echarts);

// 路由配置
const RouterConfig = {
  mode: 'hash',
  routes: Routers,
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});


const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
