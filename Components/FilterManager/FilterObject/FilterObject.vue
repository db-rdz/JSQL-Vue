<template>
  <div class="ui form">
    <div class="field">
      <div class="ui toggle checkbox">
        <input type="checkbox" name="gift" tabindex="0" class="hidden">
        <label> {{ filter.tag }} </label>
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
};
</script>

<style>

</style>
