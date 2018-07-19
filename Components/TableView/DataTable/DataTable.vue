<template>
  <table class="ui celled selectable striped table">
    <table-header :columnList="getDataObject.columnArray.columnList"></table-header>
    <table-body :options="options" :rowArray="getDataObject.rowArray"></table-body>
    <slot v-if="getNumberofColumns == 0" name="empty_columns_state"></slot>
    <slot v-if="getNumberofRows == 0 && getNumberofColumns > 0" name="empty_rows_state"></slot>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import TableHeader from './TableHeader/TableHeader.vue';
import TableBody from './TableBody/TableBody.vue';


export default {
  name: 'DataTable',
  components: { TableHeader, TableBody },
  props: {
    options: {
      type: Object,
      default() { return {}; },
    },
  },
  computed: {
    tableRows() {
      return this.getDataObject.rowArray;
    },
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberofRows',
      'getNumberofColumns',
      'getDataObject',
      // ...
    ]),
  },
};
</script>

<style>

</style>
