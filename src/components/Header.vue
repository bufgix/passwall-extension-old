<template>
  <div class="uk-flex uk-flex-between uk-flex-middle uk-text-center uk-text-middle">
    <div class="uk-flex uk-flex-left">
      <img :src="`${publicPath}logo.png`" alt="logo" height="76" width="76" />
      <p class="uk-text-lead">
        <span>Pass</span>
        <strong>Wall</strong>
      </p>
      <div class="uk-margin-small-left">
        <a @click="refresh" style="margin-top: 28px" uk-icon="icon: refresh"></a>
      </div>
    </div>
    <div>
      <button class="uk-button uk-button-small uk-button-primary">New</button>
      <button
        class="uk-button uk-button-small uk-button-default uk-margin-small-left"
        uk-icon="icon: more"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    refresh: function() {
      // TODO: implemantiton
      console.log("refreshing..");
    }
  }
};
</script>

<style>
</style>