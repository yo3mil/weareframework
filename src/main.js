import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {VueMasonryPlugin} from 'vue-masonry';
import VueTouch from 'vue-touch';

Vue.use(VueTouch);
Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
