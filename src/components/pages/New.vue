<template>
  <div class="uk-margin-small-top">
    <form>
      <div v-if="error" class="uk-alert-danger" uk-alert>
        <a class="uk-alert-close" uk-close @click="error = null"></a>
        <p class="uk-text-uppercase">{{ error.msg }}</p>
      </div>
      <div class="uk-margin uk-inline uk-width-expand">
        <span class="uk-form-icon" uk-icon="icon: world"></span>
        <span
          class="uk-form-icon uk-form-icon-flip"
          :uk-icon="URL ? 'icon: close' : 'icon: location'"
          style="pointer-events: all; cursor: pointer;"
          @click="getLocationOrClear"
        ></span>
        <input v-model="URL" class="uk-input" type="text" placeholder="URL*" />
      </div>
      <div class="uk-grid-small" uk-grid>
        <div class="uk-width-1-2 uk-inline">
          <span
            class="uk-form-icon"
            uk-icon="icon: user"
            style="margin-left: 15px; margin-bottom: 8px"
          ></span>
          <input v-model="username" class="uk-input" type="text" placeholder="Username*" />
        </div>
        <div class="uk-width-1-2 uk-inline uk-margin-small-bottom">
          <span class="uk-form-icon" uk-icon="icon: lock" style="margin-left: 15px"></span>
          <input
            v-model="password"
            class="uk-input"
            type="password"
            placeholder="Password"
            :disabled="generatePassword"
          />
        </div>
      </div>
      <label class="uk-align-right uk-margin-remove">
        <input v-model="generatePassword" class="uk-checkbox" type="checkbox" /> Generate password for me
      </label>
      <button
        class="uk-button uk-button-default uk-margin-small uk-width-1-1"
        @click="createNewLogin()"
      >
        <div v-if="loading" uk-spinner></div>
        <div v-else>ADD</div>
      </button>
    </form>
  </div>
</template>

<script>
import { getActiveTab, safeBrowserAccess, parseDomain } from "../../utils";
export default {
  data: () => ({
    location: "",
    URL: "",
    username: "",
    password: "",
    generatePassword: true,
    loading: false,
    error: null
  }),
  created: function() {
    safeBrowserAccess(getActiveTab).then(({ url }) => {
      this.location = parseDomain(url);
      this.URL = this.location;
    });
  },
  methods: {
    createNewLogin: function() {
      if (this.URL === "" || this.username === "") {
        this.error = {
          msg: "Please fill all necessary fields "
        };
        return;
      }
      this.loading = true;
      this.$http
        .post("logins/", {
          Username: this.username,
          Password: this.generatePassword ? "" : this.password,
          URL: this.URL
        })
        .then(res => {
          console.log(res);
          this.loading = false;
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLocationOrClear: function() {
      if (this.URL) {
        this.URL = "";
      } else {
        this.URL = this.location;
      }
    }
  }
};
</script>

<style>
</style>