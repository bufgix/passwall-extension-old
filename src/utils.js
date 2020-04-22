/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import Vue from "vue";
import Router from "./router";

const EXCLUDED_DOMAINS = ["about"];

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

const getActiveTab = () => {
  // use as first parameter of safeBrowserAccess function
  browser = browser || null;
  return browser.tabs
    .query({ currentWindow: true, active: true })
    .then((tabs) => tabs[0], console.error);
};

const safeBrowserAccess = (func, args = null) => {
  // This function for testing in browser and as extension
  // In browser, it will raise exception not error (syntax, undefined, etc...)
  try {
    browser = browser || null;

    return func.apply(this, args);
  } catch (err) {
    return Promise.reject(err);
  }
};

const parseDomain = (url) => {
  var matches = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
  );

  return !EXCLUDED_DOMAINS.includes(matches[1]) ? matches && matches[1] : "";
};

export {
  checkAuth,
  safeRedirect,
  getActiveTab,
  safeBrowserAccess,
  parseDomain,
};
