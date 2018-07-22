<template>
  <tr>
    <keep-alive>
      <td v-if="getShowRowSelectionBox">
        <div class="ui fitted checkbox" :id="`checkbox-${rowIndex}`">
          <input @change="toggleRowSelection(rowIndex)" type="checkbox" tabindex="0" :checked="isSelected">
          <label></label>
        </div>
      </td>
    </keep-alive>
    <td v-for="columnNumber in getNumberofColumns"
      :key="columnNumber" >
      <table-cell @change="updateCell" :value="rowData[columnNumber-1]"
        :columnType="getColumnByIndex(columnNumber-1).type" :columnName="getColumnByIndex(columnNumber-1).name"
      ></table-cell>
    </td>
  </tr>
</template>

<script>
/* global $ */
import { mapGetters, mapMutations } from 'vuex';
import TableCell from './TableCell/TableCell.vue';

export default {
  name: 'TableRow',
  components: { TableCell },
  props: {
    rowData: {
      type: Array,
    },
    rowIndex: {
      type: Number,
    },
    editCellHandler: {
      type: Function,
    },
  },
  updated() {
    $(`#checkbox-${this.rowIndex}`).checkbox();
  },
  mounted() {
    $(`#checkbox-${this.rowIndex}`).checkbox();
  },
  computed: {
    ...mapGetters('JSQL', [
      'getShowRowSelectionBox',
      'getColumnByIndex',
      'getRowData',
      'getNumberofColumns',
      'getSelectedRows',
      'getTableHandlers',
    ]),
    isSelected() {
      if (this.getSelectedRows.indexOf(this.rowIndex) !== -1) {
        return true;
      }
      return false;
    },
  },
  methods: {
    /* toggleRowSelection:
      It adds a row to the selected rows array in the JSQL store if the row is not there yet
      but if it is then it will remove it from the selected rows array.
    */
    ...mapMutations('JSQL', [
      'editCell',
      'toggleRowSelection',
    ]),
    updateCell(args) {
      if (this.getTableHandlers.editCellHandler) {
        this.getTableHandlers.editCellHandler(args);
        return;
      }
      this.editCell({ columnName: args.columnName, value: args.value, rowIndex: this.rowIndex });
    },
  },
};
</script>

<style>

</style>
