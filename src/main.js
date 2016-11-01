import Vue from 'vue'
import store from './vuex/'
import router from './router/'
import uniqueCake from './unique-cake'

new Vue({
  router,
  store,
  ...uniqueCake
}).$mount('#unique')
