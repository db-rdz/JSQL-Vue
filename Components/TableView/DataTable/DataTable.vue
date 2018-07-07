<template>
  <table class="ui celled selectable striped table">
    <table-header :columnList="getDataObject.columnArray.columnList"></table-header>
    <table-body :rowArray="getDataObject.rowArray"></table-body>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';


export default {
  name: 'DataTable',
  components: { TableHeader, TableBody },
  computed: {
    tableRows() {
      return this.getDataObject.rowArray;
    },
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberOfRows',
      'getDataObject',
      // ...
    ]),
  },
};
</script>

<style>

</style>
