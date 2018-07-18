<template>
  <tbody>
    <table-row v-model="options" v-for="(row, index) in getProcessedDataRowList"
      :key="index" :rowData="row.rowData" :rowIndex="index"
    ></table-row>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex';
import TableRow from './TableRow/TableRow.vue';

export default {
  name: 'TableBody',
  components: { TableRow },
  props: {
    options: {
      type: Object,
      default() { return {}; },
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberOfRows',
      'getDataObject',
      'getProcessedDataRowList',
      // ...
    ]),
  },
  methods: {
  },
};
</script>

<style>

</style>
