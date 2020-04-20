<template>
  <div>
    <div class="uk-flex uk-flex-between uk-grid-small" uk-grid>
      <SearchBar class="uk-margin-small-top uk-width-expand"></SearchBar>
      <div style="margin-top: 15px">
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
        .get("http://localhost:3625/logins/")
        .then(res => {
          console.log(res);
          this.tableData = res.data;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

</style>