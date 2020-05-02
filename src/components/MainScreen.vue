<template>
  <div class="uk-container">
    <Header :showBtn="checkLocalToken()"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header
  },
  methods: {
    checkLocalToken: function() {
      return localStorage.getItem("access_token") ? true : false;
    }
  }
};
</script>

<style>
</style>