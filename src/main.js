import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import 'leaflet/dist/leaflet.css'
import "leaflet/dist/images/marker-shadow.png"
import "leaflet/dist/images/marker-icon.png"
// import './node_modules/leaflet/dist/leaflet.css'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
