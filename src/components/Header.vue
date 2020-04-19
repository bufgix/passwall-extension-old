
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

      <div class="uk-margin-small-left">
        <a @click="refresh" style="margin-top: 28px" uk-icon="icon: refresh"></a>
      </div>
    </div>
    <div>
      <button
        class="uk-button uk-button-small uk-button-primary"
        @click="newAction"
      >{{ actionText }}</button>

      <button
        class="uk-button uk-button-small uk-button-default uk-margin-small-left"
        uk-icon="icon: more"
      ></button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-constant-condition */
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      actionText: "New",
      currentPath: this.$router.currentRoute.path
    };
  },
  methods: {
    refresh: function() {
      // TODO: implemantiton
      console.log("refreshing..");
    },
    newAction: function() {
      if (this.currentPath === "/") {
        this.$router.push("new");
        this.currentPath = "/new";
        this.actionText = "Back";
      } else if (this.currentPath === "/new") {
        console.log(this.currentPath);
        this.$router.go(-1);
        this.currentPath = "/";
        this.actionText = "New";
      }
    }
  }
};
</script>

<style>
</style>