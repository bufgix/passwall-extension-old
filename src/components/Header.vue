
<template>
  <!--   <div class="uk-flex uk-flex-between uk-flex-middle uk-text-center uk-text-middle">
    <div class="uk-flex uk-flex-left">
      <img :src="`${publicPath}logo.png`" alt="logo" height="50" width="50" />
      <h3>
        <span>Pass</span>
        <strong>Wall</strong>
      </h3>
    </div>
    <div>
      <button
        v-if="showBtn"
        class="uk-button uk-button-small uk-button-primary"
        @click="newAction"
      >{{ actionText }}</button>

      <button
        v-if="showBtn"
        class="uk-button uk-button-small uk-button-danger uk-margin-small-left"
        @click="quit()"
      >Quit</button>
    </div>
  </div>-->
  <div class="uk-grid-small" uk-grid>
    <div class="uk-width-1-2 uk-flex">
      <div style="margin-top: 5px">
        <img :src="`${publicPath}logo.png`" alt="logo" height="40" width="40" />
      </div>
      <div>
        <h4 style="margin-top: 9px">
          <span>Pass</span>
          <strong>Wall</strong>
        </h4>
      </div>
    </div>
    <div class="uk-width-1-2 uk-text-right uk-margin-small-top">
      <button
        v-if="showBtn"
        class="uk-button uk-button-small button-passwall"
        @click="newAction"
      >{{ actionText }}</button>

      <button
        v-if="showBtn"
        class="uk-button uk-button-small uk-margin-small-left"
        @click="quit()"
      ><span uk-icon="icon: sign-out"></span></button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-constant-condition */
import { safeRedirect } from "../utils";

export default {
  props: {
    showBtn: Boolean
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      actionText: "New"
    };
  },
  watch: {
    $route(to, from) {
      this.actionText = from.path === "/" ? "Back" : "New";
    }
  },
  methods: {
    newAction: function() {
      const currentPath = this.$router.currentRoute.path;
      if (currentPath === "/") {
        safeRedirect("new");
      } else if (currentPath === "/new") {
        safeRedirect("/");
      }
    },
    quit: function() {
      localStorage.removeItem("token");
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss">
.button-passwall {
  background-color: #1890FF !important;
  color: #fff;
}
</style>