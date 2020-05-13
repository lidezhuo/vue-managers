import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './plugins/element.js'
// 导入全局样式
import './assets/global.less'
Vue.config.productionTip = false

  new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
