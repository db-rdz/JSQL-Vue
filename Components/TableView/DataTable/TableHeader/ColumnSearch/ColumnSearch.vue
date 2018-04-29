<template>
  <div class="ui form">
    <div class="field">
      <input type="text" placeholder="Search Column">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnSearch',
  prop: {
    columnIndex: {
      type: Number,
    },
  },
};
</script>

<style>

</style>
