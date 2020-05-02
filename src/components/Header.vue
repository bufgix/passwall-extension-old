
<template>
  <div class="uk-grid-small" uk-grid>
    <div class="uk-width-1-2 uk-flex">
      <div style="margin-top: 5px">
        <img :src="`${publicPath}logo.png`" alt="PassWall" height="40" width="40" />
      </div>
      <div>
        <h4 style="margin-top: 9px">
          <span>Pass</span>
          <strong>Wall</strong>
        </h4>
      </div>
    </div>
    <div class="uk-width-1-2 uk-text-right uk-margin-small-top">
      <button v-if="showBtn" class="uk-button uk-button-small button-passwall uk-flex-inline uk-flex-middle uk-flex-between" @click="newAction" style="padding: 0 10px">
        <span :uk-icon="`icon: ${actionIcon}`" style="margin-right: 3px"></span>
        <div>{{ actionText }}</div>
      </button>

      <button v-if="showBtn" class="uk-button uk-button-small uk-margin-small-left " @click="quit()">
        <span uk-icon="icon: sign-out"></span>
      </button>
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
      actionText: "New Pass",
      actionIcon: "plus"
    };
  },
  watch: {
    $route(to, from) {
      this.actionText = from.path === "/" ? "Back" : "New Pass";
      this.actionIcon = from.path === "/" ? "chevron-right" : "plus"
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
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss">
.button-passwall {
  background-color: #1890ff !important;
  color: #fff;
}
</style>