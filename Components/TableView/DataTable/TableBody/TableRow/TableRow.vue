<template>
  <tr>
    <td v-for="index in getNumberofColumns"
      :key="index">
      <table-cell @change="editCell" :value="rowObject.rowData[index - 1]"
        :columnType="getColumnByIndex(index).type" :columnName="getColumnByIndex(index).name"
      ></table-cell>
      <!-- {{ rowObject.rowData[index - 1] }} -->
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex';
import TableCell from './TableCell/TableCell';

export default {
  name: 'TableRow',
  components: { TableCell },
  props: {
    rowObject: {
      type: Object,
    },
    rowIndex: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getColumnByIndex',
      'getRowData',
      'getNumberofColumns',
    ]),
  },
  methods: {
    editCell(args) {
      this.$store.commit('editCell', { columnName: args.columnName, value: args.value, rowIndex: this.rowIndex });
    },
  },
};
</script>

<style>

</style>
