<template>
  <div>
    <div class="uk-flex uk-flex-between uk-grid-small" uk-grid>
      <SearchBar
        ref="search"
        class="uk-width-expand"
        :value="searchText"
        v-on:change="changeSearchText"
        v-on:clear="refresh()"
      ></SearchBar>
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
import {
  checkAuth,
  getActiveTab,
  safeBrowserAccess,
  parseDomain
} from "../../utils";

export default {
  components: {
    SearchBar,
    ResultTable
  },
  data: () => ({
    loading: true,
    tableData: [],
    searchText: ""
  }),
  created: function() {
    safeBrowserAccess(getActiveTab)
      .then(({ url }) => {
        this.searchText = parseDomain(url);
        this.search().then(result => {
          if (!(result.length > 0)) {
            // if no login for active tab, get all logins
            this.searchText = "";
            this.refresh();
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    refresh: function() {
      this.loading = true;
      this.$http
        .get("api/logins")
        .then(res => {
          this.tableData = res.data;
          this.loading = false;
        })
        .catch(() => {
          // TODO: Show Error Message
          checkAuth();
        });
    },
    changeSearchText: function(e) {
      this.searchText = e;
      this.search();
    },
    search: function() {
      this.loading = true;
      return this.$http
        .get("api/logins", { params: { Search: this.searchText } })
        .then(res => {
          this.tableData = res.data;
          this.loading = false;
          return res.data;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    }
  }
};
</script>

<style>
</style>