<template>
  <div class="uk-flex uk-flex-between">
    <input class="uk-input uk-form-blank uk-form-width-small" :type="type" :value="value" />
    <button class="uk-icon-button" :uk-icon="lockBtnIcon" @click="showPassword()"></button>
    <button class="uk-icon-button" uk-icon="copy"></button>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data: () => ({
    type: "password",
    lockBtnIcon: "lock"
  }),
  methods: {
    showPassword: function() {
      this.type = this.type === "password" ? "text" : "password";
      this.lockBtnIcon = this.type === "password" ? "lock" : "unlock";
    }
  }
};
</script>

<style>
</style>