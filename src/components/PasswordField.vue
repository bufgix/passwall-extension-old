<template>
  <div class="uk-flex uk-flex-between">
    <input class="uk-input uk-form-blank uk-form-width-small" :type="type" :value="value" readonly/>
    <button
      v-if="isPassword"
      class="uk-icon-button"
      :uk-icon="lockBtnIcon"
      @click="showPassword()"
    ></button>
    <button class="uk-icon-button" :uk-icon="copyBtnIcon" @click="copyPassword()"></button>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    isPassword: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    type: "password",
    lockBtnIcon: "lock",
    copyBtnIcon: "copy"
  }),
  methods: {
    showPassword: function() {
      this.type = this.type === "password" ? "text" : "password";
      this.lockBtnIcon = this.type === "password" ? "lock" : "unlock";
    },
    copyPassword: function() {
      this.$copyText(this.value)
        .then(() => {
          this.copyBtnIcon = "check";
          setTimeout(() => {
            this.copyBtnIcon = "copy";
          }, 5000);
        })
        .catch(err => {
          this.copyBtnIcon = "close";
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>