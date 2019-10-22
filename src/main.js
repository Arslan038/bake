import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Clipboard from "v-clipboard";
import VueApexCharts from "vue-apexcharts";
import firebase from "firebase";

Vue.component("apexchart", VueApexCharts);

Vue.use(Clipboard);
Vue.use(Antd);
Vue.use(BootstrapVue);

var firebaseConfig = {
  apiKey: "AIzaSyCPXuiKjLFyoxvRKp6BdP2OTmY5z-azVo4",
  authDomain: "bakenrolls-2d78b.firebaseapp.com",
  databaseURL: "https://bakenrolls-2d78b.firebaseio.com",
  projectId: "bakenrolls-2d78b",
  storageBucket: "bakenrolls-2d78b.appspot.com",
  messagingSenderId: "319747984252",
  appId: "1:319747984252:web:a5f0b996bc26b6f93f72f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
