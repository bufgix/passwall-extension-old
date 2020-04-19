<template>
  <div class="uk-container">
    <Header></Header>
    <SearchBar class="uk-margin-small-top"></SearchBar>
    <ResultTable class="uk-margin-top"></ResultTable>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultTable from "./ResultTable";

export default {
  components: {
    Header,
    SearchBar,
    ResultTable
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    refresh: function() {
      // TODO: implemantiton
      console.log("refreshing..");
    }
  }
};
</script>

<style>
</style>