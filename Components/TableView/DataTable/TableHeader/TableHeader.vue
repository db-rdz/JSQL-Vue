<template>
  <thead>
    <tr>
      <th v-if="getShowRowSelectionBox"><a @click="handleSelectActionTrigger" href="#"> {{ getSelectActionText }} </a></th>
      <th v-for="index in getNumberofColumns" :key="index">
        <div v-if="getShowColumnSelectionBox" class="ui fitted checkbox">
          <input @change="toggleColumnSelection(index)" type="checkbox" tabindex="0" class="hidden">
          <label></label>
        </div>
        {{ getColumnByIndex(index - 1).name }}
      </th>
    </tr>
    <tr v-if="getShowColumnSearch">
      <th v-if="getShowRowSelectionBox"></th>
      <th v-for="index in getNumberofColumns" :key="index">
        <column-search :columnIndex="index - 1"></column-search>
      </th>
    </tr>
  </thead>
</template>

<script>
/* global $ */
import { mapGetters, mapMutations } from 'vuex';
import ColumnSearch from './ColumnSearch/ColumnSearch.vue';

export default {
  name: 'TableHeader',
  components: { ColumnSearch },
  props: {
    columnArray: {
      type: Object,
    },
  },
  mounted() {
    $('.ui.checkbox').checkbox();
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getColumnByIndex',
      'getNumberofColumns',
      'getShowColumnSearch',
      'getShowColumnSelectionBox',
      'getShowRowSelectionBox',

      'getSelectedRows',
      'getSelectedColumns',
      'getSelectActionText',
      'getSelectHandler',
      // ...
    ]),
  },
  methods: {
    ...mapMutations('JSQL', [
      'removeRowsAndColumns',
      'setSelectedColumns',
      'setSelectedRows',
    ]),
    /* toggleColumnSelection:
    It adds a column to the selected columns array in the JSQL store if the column is not there yet
    but if it is then it will remove it from the selected columns array.
    */
    toggleColumnSelection(columnIndex) {
      const index = this.getSelectedColumns.indexOf(columnIndex);
      if (index !== -1) { // If column index is found to be in the selected columna array then...
        // Delete that index from the selected columna array.
        this.getSelectedColumns.splice(columnIndex, 1);
      } else {
        // If not then you need to add it to the selected columna array.
        this.getSelectedColumns.push(columnIndex);
      }
    },
    handleSelectActionTrigger(e) {
      const rows = this.getSelectedRows;
      const columns = this.getSelectedColumns;
      e.preventDefault();
      if (false) {
        console.log('hello');
      } else {
        this.getSelectHandler({ rows, columns });
      }

      this.setSelectedColumns([]);
      this.setSelectedRows([]);
    },
  },
};
</script>

<style>

</style>
