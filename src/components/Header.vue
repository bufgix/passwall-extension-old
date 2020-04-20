
<template>
  <div class="uk-flex uk-flex-between uk-flex-middle uk-text-center uk-text-middle">
    <div class="uk-flex uk-flex-left">
      <router-link to="/">
        <img :src="`${publicPath}logo.png`" alt="logo" height="76" width="76" />
      </router-link>
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
        class="uk-button uk-button-small uk-button-default uk-margin-small-left"
        uk-icon="icon: more"
      ></button>
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
    }
  }
};
</script>

<style>
</style>