<template>
  <div class="ui form">
    <div class="field">
      <a class="item pointer" @click="editFilter" ><i class="cog icon"></i></a>
      <div class="ui toggle icon checkbox">
        <input type="checkbox" name="gift" tabindex="0" class="hidden">
        <label><h4 class="ui header"> {{ filter.tag }} </h4></label>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'FilterObject',
  props: {
    filter: {
      type: Object,
      default() { return {}; },
    },
  },
  mounted() {
    $('.checkbox').checkbox();
  },
  methods: {
    editFilter() {
      this.$emit('editFilter', this.filter);
    },
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
