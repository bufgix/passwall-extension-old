<template>
  <div>
    <SearchBar class="uk-margin-small-top"></SearchBar>
    <ResultTable class="uk-margin-top"></ResultTable>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import SearchBar from "../SearchBar";
import ResultTable from "../ResultTable";

export default {
  components: {
    SearchBar,
    ResultTable
  },
  created: function() {
    this.$http.get("http://localhost:3625/logins/")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>