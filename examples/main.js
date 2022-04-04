import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import  '../components/css/demo.scss'
// import  '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
//
// //todo 注意点写法 要在index.js里加Vue.compenent
// Vue.use(Demo) // Demo.install -> Vue.compoent
// Vue.use(Card)
//
import 'ws0909-ui/dist/css/index.css'
import WUI from 'ws0909-ui'
Vue.use(WUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
