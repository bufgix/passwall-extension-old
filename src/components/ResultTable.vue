<template>
  <div id="table" class="uk-overflow-auto">
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
          <td class="uk-text-middle">{{row.URL}}</td>
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
import PasswordFiled from "./PasswordField";

export default {
  components: {
    "password-field": PasswordFiled
  },
  props: {
    tableData: Array
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