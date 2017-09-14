import Vue from 'vue'
import App from './app'
import router from './router'
import iView from 'iview'
import 'common/css/reset.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
