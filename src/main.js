import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

console.log(process.env.VUE_APP_CURRENTMODE, 12312)

new Vue({
  // 去掉的话app组件将不显示 更改为路由显示
  // render: h => h(App), 
  router, // 简单路由配置
  store, // 引入vuex
}).$mount('#app')
