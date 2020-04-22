<template>
  <div
    class="uk-flex uk-flex-left"
    @mouseup="hidePassword()"
    style="min-height: 36px;"
  >
    <div v-if="statePassword" class="uk-margin-small" style="margin-top: 8px;">{{ value }}</div>
    <button
      v-if="!statePassword"
      class="uk-icon-button uk-margin-small-right"
      :uk-icon="lockBtnIcon"
      @mousedown="showPassword()"
      @mouseup="hidePassword()"
    ></button>
    <button
      v-if="!statePassword"
      class="uk-icon-button"
      :uk-icon="copyBtnIcon"
      @click="copyPassword()"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data: () => ({
    type: "password",
    lockBtnIcon: "lock",
    copyBtnIcon: "copy",
    statePassword: false
  }),
  methods: {
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
    },
    showPassword: function() {
      this.statePassword = true;
    },
    hidePassword: function() {
      this.statePassword = false;
    }
  }
};
</script>

<style>
</style>