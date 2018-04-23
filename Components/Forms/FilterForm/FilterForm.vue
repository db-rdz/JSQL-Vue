<template>
  <div class="ui form">
    <div class="three fields">
      <div class="field">
        <label>Tag your filter:</label>
        <input type="text" placeholder="Filter Name" :value="filter.tag">
      </div>
    </div>

    <div class="three fields">
      <div class="field">
        <label>Apply your filter to a column:</label>
        <input type="text" placeholder="Filter Name" :value="filter.targetColumn">
      </div>
    </div>

    <div class="three fields">
      <div class="field">
        <label>Choose how to filter your data:</label>
        <input type="text" placeholder="Filter Name" :value="filter.filterFunction">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterForm',
  props: {
    filter: {
      type: Object,
      default() { return {}; },
    },
  },
};
</script>

<style>

</style>
