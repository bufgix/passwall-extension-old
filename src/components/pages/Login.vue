<template>
  <div>
    <form>
      <fieldset class="uk-fieldset">
        <div v-if="error" class="uk-alert-danger" uk-alert>
          <a class="uk-alert-close" uk-close @click="error = null"></a>
          <p class="uk-text-uppercase">{{error.data.message || 'Authentication failed'}}</p>
        </div>

        <div class="uk-margin-small uk-text-left">
          <label class="uk-form-label">PassWall Server</label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: world"></span>
            <input v-model="baseUrl" class="uk-input" type="text" placeholder="Server URL" />
          </div>
        </div>

        <div class="uk-margin-small uk-text-left">
          <label class="uk-form-label">Username</label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input v-model="username" class="uk-input" type="text" placeholder="Username" />
          </div>
        </div>
        <div class="uk-margin-small uk-text-left">
          <label class="uk-form-label">Password</label>
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input v-model="password" class="uk-input" type="password" placeholder="Password" />
          </div>
        </div>
        <button class="uk-button uk-button-default uk-align-right uk-margin-small-bottom" @click="login()">
          <div v-if="loading" uk-spinner></div>
          <div v-else>LOG IN</div>
        </button>
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
    baseUrl: localStorage.getItem("baseURL") || "http://localhost:3625/",
    error: null,
    loading: false
  }),
  methods: {
    login: function() {
      if (!this.loading) {
        this.loading = true;
        localStorage.setItem("baseURL", this.baseUrl);
        this.$http.defaults.baseURL = this.baseUrl;
        this.$http
          .post("auth/signin", {
            Username: this.username,
            Password: this.password
          })
          .then(({ data }) => {
            const {access_token, refresh_token} = data;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem('refresh_token', refresh_token);
            this.$http.defaults.headers.common.Authorization = `Bearer ${access_token}`;
            this.$router.push({ path: "/" });
            this.loading = false;
          })
          .catch(err => {
            this.error = err.response;
            if (!err.status && !err.response) {
              // Network Error
              this.error = {
                data: {
                  message: "PassWall server not reachable"
                }
              };
            }
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>