import Vue from "vue";
import App from "./App.vue";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
import Router from "./router";

// loads the Icon plugin
UIkit.use(Icons);
Vue.config.productionTip = false;

new Vue({
  router: Router.PageRouter,
  render: (h) => h(App),
}).$mount("#app");
