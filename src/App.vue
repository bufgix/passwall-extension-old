<template>
  <div id="app">
    <MainScreen></MainScreen>
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen
  }
};
</script>

<style lang="scss">
body {
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  margin-bottom: 5px;
  min-width: 420px;
  max-width: 500px;
  font-size: 12px;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="checkbox"]:focus,
input[type='search']:focus{
  border-color: #1890FF !important;
}
</style>
