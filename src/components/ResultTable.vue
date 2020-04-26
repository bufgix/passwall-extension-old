<template>
  <div id="table" class="uk-overflow-auto uk-table-justify" style="max-height: 300px">
    <table class="uk-table uk-table-hover uk-table-divider uk-table-small uk-text-left">
      <thead>
        <tr>
          <th>URL</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableData" :key="row.ID">
          <td class="uk-text-middle">
            <div class="uk-flex-inline uk-text-middle">
              <img
                :src="`https://s2.googleusercontent.com/s2/favicons?domain_url=${parseDomain(row.URL)}`"
                :alt="row.URL"
                height="20"
                width="20"
                style="margin-right: 2px; margin-left: 2px"
              />
              {{url(row.URL)}}
            </div>
          </td>
          <td class="uk-text-middle">{{row.Username}}</td>
          <td class="uk-text-middle">
            <password-field :value="row.Password"></password-field>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PasswordField from "./PasswordField";
import { parseDomain } from "../utils";

export default {
  components: {
    "password-field": PasswordField
  },
  props: {
    tableData: Array
  },
  methods: {
    url: function(raw) {
      if (raw.length > 22) return `${[...raw].splice(0, 22).join("")}...`;
      else return raw;
    },
    parseDomain: function(url) {
      return parseDomain(url);
    }
  }
};
</script>

<style lang="scss" scoped>
#table {
  max-height: 270px;
  scrollbar-color: #b9b7c2 #f6f8fa;
  scrollbar-width: thin;
}

#table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #f6f8fa;
}
#table::-webkit-scrollbar {
  width: 5px;
  background-color: #f6f8fa;
}
#table::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #424242;
}
</style>