<template>
  <div>
    <h3 class="ui top attached header">
      <editable-div @change="handleTableNameEditing" :value="getTableName"></editable-div>
    </h3>
    <table-menu v-bind="options" class="attached"></table-menu>
    <filter-label-row></filter-label-row>
    <data-table :options="options" class="ui bottom attached">
      <slot name="empty_columns_state" slot="empty_columns_state"></slot>
      <slot name="empty_rows_state" slot="empty_rows_state"></slot>
    </data-table>
  </div>
</template>

<script>
/* global $ */

import { mapGetters, mapMutations } from 'vuex';
import EditableDiv from '../Forms/EditableDiv/EditableDiv.vue';
import TableMenu from './TableMenu/TableMenu.vue';
import FilterLabelRow from './FilterLabelRow/FilterLabelRow.vue';
import DataTable from './DataTable/DataTable.vue';

export default {
  name: 'TableView',
  components: { EditableDiv, TableMenu, FilterLabelRow, DataTable },
  props: {
    name: {
      default: '',
    },
    options: {
      type: Object,
      default() { return {}; },
    },
  },
  methods: {
    ...mapMutations('JSQL', [
      'editTableName',
    ]),
    handleTableNameEditing(name) {
      if (this.options && this.getTableHandlers.editTableNameHandler) {
        this.options.editTableNameHandler(name);
      } else {
        this.editTableName(name);
      }
    },
  },
  created() {
  },
  mounted() {
    $('.ui.checkbox').checkbox();
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberofRows',
      'getNumberofColumns',
      'getDataObject',
      'getTableHandlers',
      // ...
    ]),
  },
};
</script>

<style>

</style>
