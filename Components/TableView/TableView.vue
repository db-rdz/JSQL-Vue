<template>
  <div>
    <h3 class="ui top attached header">
      <span v-if="!editingTableName" @dblclick="toggleTableNameEditing"> {{ getTableName }} </span>
      <input v-if="editingTableName" @blur="toggleTableNameEditing" @change="handleTableNameEditing" type="text" class="ui input" :value="getTableName"/>
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
import TableMenu from './TableMenu/TableMenu.vue';
import FilterLabelRow from './FilterLabelRow/FilterLabelRow.vue';
import DataTable from './DataTable/DataTable.vue';

export default {
  name: 'TableView',
  components: { TableMenu, FilterLabelRow, DataTable },
  props: {
    name: {
      default: '',
    },
    options: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      editingTableName: false,
    };
  },
  methods: {
    ...mapMutations('JSQL', [
      'editTableName',
    ]),
    toggleTableNameEditing() {
      if (this.getTable.options.allowTableNameEditing) {
        this.editingTableName = !this.editingTableName;
      }
    },
    handleTableNameEditing(e) {
      const name = e.target.value;
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
