/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import Vue from "vue";
import Router from "./router";
import browser from "webextension-polyfill";

const EXCLUDED_DOMAINS = ["about", "chrome"]; // Exclude the browser specific urls

const checkAuth = () => {
  const exToken = localStorage.getItem("token");
  Vue.prototype.$http.defaults.baseURL =
    localStorage.getItem("baseURL") || "http://localhost:3625/";
  if (exToken) {
    Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${exToken}`;
    Vue.prototype.$http
      .post("auth/check")
      .then(() => {
        Router.PageRouter.push({ path: "/" }).catch(() => {});
      })
      .catch(() => {
        // Try Refresh
        Vue.prototype.$http
          .post("auth/refresh")
          .then(({ data }) => {
            localStorage.setItem("token", data.token);
            Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            Router.PageRouter.push({ path: "/" }).catch(() => {});
          })
          .catch(() => {
            // Go to Login with username and password
            Router.PageRouter.push({ path: "/login" }).catch(() => {});
          });
      });
  } else {
    Router.PageRouter.push({ path: "/login" }).catch(() => {});
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
  return browser.tabs
    .query({ currentWindow: true, active: true })
    .then((tabs) => tabs[0], console.error);
};

const sendMessageToPage = (id, data) => {
  // use as first parameter of safeBrowserAccess function
  return browser.tabs.sendMessage(id, data);
};

const safeBrowserAccess = (func, ...args) => {
  // This function for testing in browser and as extension
  // In browser, it will raise exception not error (syntax, undefined, etc...)
  try {
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
  sendMessageToPage,
};
