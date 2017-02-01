console.log('Client')

import '../lib/methods'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTracker from 'vue-meteor-tracker'

Vue.use(VueRouter)
Vue.use(VueTracker)

import App from './components/App.vue'

/* eslint no-new: 0 */
new Vue({
  ...App,
  el: '#app',
})
