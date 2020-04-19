<template>
  <div class="uk-container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import Header from "./Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
</style>