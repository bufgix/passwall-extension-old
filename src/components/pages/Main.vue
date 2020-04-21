<template>
  <div>
    <div class="uk-flex uk-flex-between uk-grid-small" uk-grid>
      <SearchBar class="uk-width-expand"></SearchBar>
      <div style="margin-top: 6px">
        <a @click="refresh" uk-icon="icon: refresh"></a>
      </div>
    </div>
    <div v-if="loading" style=" min-height: 150px;">
      <span uk-spinner="ratio: 3" class="uk-margin-top"></span>
    </div>
    <ResultTable v-else :table-data="tableData" class="uk-margin-top"></ResultTable>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import SearchBar from "../SearchBar";
import ResultTable from "../ResultTable";
import { checkAuth } from "../../utils";

export default {
  components: {
    SearchBar,
    ResultTable
  },
  data: () => ({
    loading: true,
    tableData: []
  }),
  created: function() {
    this.refresh();
  },
  methods: {
    refresh: function() {
      this.loading = true;
      this.$http
        .get("logins/")
        .then(res => {
          this.tableData = res.data;
          this.loading = false;
        })
        .catch(() => {
          // TODO: Show Error Message
          checkAuth();
        });
    }
  }
};
</script>

<style>
</style>