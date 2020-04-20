<template>
  <div>
    <form>
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Login</legend>
        <div v-if="error" class="uk-alert-danger" uk-alert>
          <a class="uk-alert-close" uk-close @click="error = null"></a>
          <p class="uk-text-uppercase">{{error.data.message || 'Authentication failed'}}</p>
        </div>

        <div class="uk-margin uk-text-left">
          <label class="uk-form-label">WallPass Server</label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: world"></span>
            <input v-model="baseUrl" class="uk-input" type="text" placeholder="Server URL" />
          </div>
        </div>

        <div class="uk-margin uk-text-left">
          <label class="uk-form-label">Username</label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input v-model="username" class="uk-input" type="text" placeholder="Username" />
          </div>
        </div>
        <div class="uk-margin uk-text-left">
          <label class="uk-form-label">Password</label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input v-model="password" class="uk-input" type="password" placeholder="Password" />
          </div>
        </div>
        <button class="uk-button uk-button-default uk-align-right" @click="login()">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  data: () => ({
    username: "",
    password: "",
    baseUrl: "http://localhost:3625/",
    error: null
  }),
  methods: {
    login: function() {
      localStorage.setItem("baseURL", this.baseUrl);
      this.$http.defaults.baseURL = this.baseUrl;
      this.$http
        .post("/auth/signin", {
          Username: this.username,
          Password: this.password
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          this.$http.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          this.error = err.response;
        });
    }
  }
};
</script>

<style>
</style>