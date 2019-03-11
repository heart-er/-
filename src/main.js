import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'bulma'
import '../node_modules/font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
