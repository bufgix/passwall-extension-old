import Vue from "vue";
import App from "./App.vue";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import VueClipboard from 'vue-clipboard2'
import "uikit/dist/css/uikit.min.css";
import Router from "./router";
import ApiService from "./api";
import { checkAuth } from "./utils";

// loads the Icon plugin
UIkit.use(Icons);
Vue.config.productionTip = false;
Vue.prototype.$http = ApiService;

Vue.use(VueClipboard);

checkAuth();
new Vue({
  router: Router.PageRouter,
  render: (h) => h(App),
}).$mount("#app");