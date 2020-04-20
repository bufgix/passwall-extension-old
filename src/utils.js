import Vue from "vue";
import Router from "./router";

const checkAuth = () => {
  const exToken = localStorage.getItem("token");
  Vue.prototype.$http.defaults.baseURL =
    localStorage.getItem("baseURL") || "http://localhost:3625/";
  if (exToken) {
    Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${exToken}`;
    Vue.prototype.$http
      .post("auth/check")
      .then(() => {
        Router.PageRouter.push({ path: "/" });
      })
      .catch(() => {
        // Try Refresh
        Vue.prototype.$http
          .post("auth/refresh")
          .then(({ data }) => {
            localStorage.setItem("token", data.token);
            Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            Router.PageRouter.push({ path: "/" });
          })
          .catch(() => {
            // Go to Login with username and password
            Router.PageRouter.push({ path: "/login" });
          });
      });
  } else {
    Router.PageRouter.push({ path: "/login" });
  }
};

const safeRedirect = (routeName) => {
  const token = localStorage.getItem("token");
  if (token) {
    Router.PageRouter.push(routeName);
    return Promise.resolve(true);
  }
  return Promise.reject(false);
};

export { checkAuth, safeRedirect };
