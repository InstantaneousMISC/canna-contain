import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {
  store
} from './store/store'
import router from './router/index'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

//Setup Font Awesome-->
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//<---

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')