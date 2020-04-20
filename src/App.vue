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
  margin-top: 10px;
  margin-bottom: 10px;
  width: 600px;
}
</style>
