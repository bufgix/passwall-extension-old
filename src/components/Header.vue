
<template>
  <div class="uk-flex uk-flex-between uk-flex-middle uk-text-center uk-text-middle">
    <div class="uk-flex uk-flex-left">
      <img :src="`${publicPath}logo.png`" alt="logo" height="76" width="76" />
      <p class="uk-text-lead">
        <span>Pass</span>
        <strong>Wall</strong>
      </p>
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
  methods: {
    newAction: function() {
      const currentPath = this.$router.currentRoute.path;
      if (currentPath === "/") {
        safeRedirect("new").then(() => {
          this.actionText = "Back";
        });
      } else if (currentPath === "/new") {
        safeRedirect("/").then(() => {
          this.actionText = "New";
        });
      }
    },
    quit: function() {
      localStorage.removeItem("token");
      this.$router.push("login");
    }
  }
};
</script>

<style>
</style>