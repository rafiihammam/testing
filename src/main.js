import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: 'AIzaSyCkfqWZ7MuBv5IVH8ceZBjXzZRYBZlE2sE',
  authDomain: 'testing-a8f15.firebaseapp.com',
  databaseURL: 'https://testing-a8f15.firebaseio.com',
  projectId: 'testing-a8f15',
  storageBucket: 'testing-a8f15.appspot.com',
  messagingSenderId: '100932057433',
  appId: '1:100932057433:web:85cbaa0394d36db8ceb448'
}
// Initialize Firebase
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
