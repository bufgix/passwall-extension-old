<template>
  <div>
    <form>
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Legend</legend>

        <div class="uk-margin">
          <input class="uk-input" type="text" placeholder="Input" />
        </div>

        <div class="uk-margin">
          <select class="uk-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>

        <div class="uk-margin">
          <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input class="uk-radio" type="radio" name="radio2" checked /> A
          </label>
          <label>
            <input class="uk-radio" type="radio" name="radio2" /> B
          </label>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input class="uk-checkbox" type="checkbox" checked /> A
          </label>
          <label>
            <input class="uk-checkbox" type="checkbox" /> B
          </label>
        </div>

        <div class="uk-margin">
          <input class="uk-range" type="range" value="2" min="0" max="10" step="0.1" />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  created: function() {
    this.login();
  },
  methods: {
    login: function() {
      this.$http
        .post("/auth/signin", {
          Username: "passwall",
          Password: "test123"
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          this.$http.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          this.$router.push({ path: "/" });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>