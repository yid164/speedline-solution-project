import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import router from './router'


Vue.use(VueGoogleMaps,{
  load:{
    key: "AIzaSyB9ueAgek6q0ZdoGUuAfg6rKHCoATQgaIA"
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
