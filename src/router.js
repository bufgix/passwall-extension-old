import Vue from "vue";
import Router from "vue-router";
import Main from "./components/pages/Main";
import New from "./components/pages/New";
import Login from "./components/pages/Login";

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
      {
        path: "/login",
        component: Login,
      },
    ],
  }),
};
