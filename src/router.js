import Vue from "vue";
import Router from "vue-router";
import Main from "./components/pages/Main";
import New from "./components/pages/New";

Vue.use(Router);

export default {
  PageRouter: new Router({
    routes: [
      {
        path: "/",
        component: Main,
      },
      {
        path: "/new",
        component: New,
      },
    ],
  }),
};
