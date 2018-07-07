<template>
  <tbody>
    <table-row v-for="(row, index) in getRowList"
      :key="index" :rowObject="row" :rowIndex="index"
    ></table-row>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex';
import TableRow from './TableRow/TableRow';

export default {
  name: 'TableBody',
  components: { TableRow },
  props: {
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberOfRows',
      'getDataObject',
      'getRowList',
      // ...
    ]),
  },
};
</script>

<style>

</style>
