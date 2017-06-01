
import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';

import store from './store.js';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'
import AppNavigator from './AppNavigator.vue';


import App from './main.vue'

Vue.use(Vuex);
Vue.use(VueOnsen);

// Init App
new Vue({
  el: '#app',
  render: h => h(AppNavigator),
  store: new Vuex.Store(store)
})
