<template>
  <div uk-grid>
    <form
      class="uk-search uk-search-default uk-width-expand"
      @submit.prevent="$emit('change', $event.target.elements[0].value)"
    >
      <span
        class="uk-form-icon uk-form-icon-flip"
        :uk-icon="stateVal ? 'icon: close' : 'icon: search'"
        @click="clearText()"
        style="pointer-events: all; cursor: pointer;"
      ></span>
      <input
        class="uk-search-input"
        type="search"
        placeholder="Search URL or Username"
        v-model="stateVal"
      />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    stateVal: ""
  }),
  created: function() {
    this.stateVal = this.value;
  },
  watch: {
    value: function(){
      this.stateVal = this.value;
    }
  },
  methods: {
    clearText: function(){
      this.stateVal = ''
      this.$emit("clear");
    }
  }
};
</script>

<style scoped>
</style>