import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const Demo = Vue.extend({})
const d = new Demo()

Vue.prototype.$bus = d

new Vue({
  render: h => h(App)
}).$mount('#app')
