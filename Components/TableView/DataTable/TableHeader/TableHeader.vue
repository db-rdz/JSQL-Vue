<template>
  <thead>
    <tr>
      <th v-if="getShowRowSelectionBox" class="one wide">
        <a @click="handleSelectActionTrigger" href="#">
          {{ getSelectActionText }}
        </a>
      </th>
      <table-column v-for="(column, columnName) in getProcessedDataColumnList" :key="columnName"
        :column="column"
      ></table-column>
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
import TableColumn from './TableColumn.vue';
import EditableDiv from '../../../Forms/EditableDiv/EditableDiv.vue';

export default {
  name: 'TableHeader',
  components: { ColumnSearch, EditableDiv, TableColumn },
  props: {
    columnArray: {
      type: Object,
    },
  },
  data() {
    return {
      editingColumnName: false,
    };
  },
  mounted() {
    $('.ui.checkbox').checkbox();
  },
  computed: {
    ...mapGetters('JSQL', [
      'getNumberofColumns',
      'getShowColumnSearch',
      'getShowRowSelectionBox',

      'getSelectedRows',
      'getSelectedColumns',
      'getSelectActionText',
      'getSelectHandler',
      'getProcessedDataColumnList',
      // ...
    ]),
  },
  methods: {
    ...mapMutations('JSQL', [
      'removeRowsAndColumns',
      'setSelectedColumns',
      'setSelectedRows',
      'editColumnName',
    ]),
    handleSelectActionTrigger(e) {
      const rows = this.getSelectedRows;
      const columns = this.getSelectedColumns;
      e.preventDefault();
      if (false) {
        console.log('hello');
      } else {
        this.getSelectHandler({ rows, columns });
      }

      // Clear the selected colum/row arrays.
      this.setSelectedColumns([]);
      this.setSelectedRows([]);
    },
  },
};
</script>

<style>

</style>
