<template>
  <div class="ui form">
    <div class="field">
      <input @keyup="searchColumn" type="text" placeholder="Search Column">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ColumnSearch',
  props: {
    columnIndex: {
      type: Number,
    },
  },
  methods: {
    searchColumn(e) {
      const columnObject = this.getColumnByIndex(this.columnIndex);
      this.getColumnByIndex(columnObject.name, e.target.value);
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getColumnByIndex',
    ]),
  },
};
</script>

<style>

</style>
