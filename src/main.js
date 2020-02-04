import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import EasySlider from 'vue-easy-slider'
// Vue.use(EasySlider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
