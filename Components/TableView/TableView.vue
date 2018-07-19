<template>
  <div>
    <h3 class="ui top attached header">
      {{ getTableName }}
    </h3>
    <table-menu v-bind="options" :data="menuData" class="attached"></table-menu>
    <filter-label-row></filter-label-row>
    <data-table :options="options" class="ui bottom attached">
      <slot name="empty_columns_state" slot="empty_columns_state"></slot>
      <slot name="empty_rows_state" slot="empty_rows_state"></slot>
    </data-table>
  </div>
</template>

<script>
/* global $ */

import { mapGetters } from 'vuex';
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
      menuData: [
        // { item: 'plus', subItems: ['Row', 'Column'] },
        // { item: 'trash' },
        // { item: 'search', subItems: ['Column', 'Row'] },
        // { item: 'filter' },
      ],
    };
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
      // ...
    ]),
  },
};
</script>

<style>

</style>
