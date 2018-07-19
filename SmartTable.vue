<template>
  <div class="hello">
    <div class="ui card">
      <div class="content">
        <a class="header">{{ this.getTableName }}</a>
        <div class="meta">
          <span class="date">Joined in 2013</span>
        </div>
        <div class="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon"></i>
          {{ this.getNumberofRows }} Entries
        </a>
      </div>
    </div>
    <table-view :options="options">
      <slot name="empty_columns_state" slot="empty_columns_state"></slot>
      <slot name="empty_rows_state" slot="empty_rows_state"></slot>
    </table-view>
    <br><br><br>
    <graph-view></graph-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { TableObject } from 'jsql-smarttable';
import TableView from './Components/TableView/TableView.vue';
import GraphView from './Components/GraphView/GraphView.vue';

const { mapGetters, mapMutations } = Vuex;

Vue.use(Vuex);

const store = {
  state: {
    tableName: '',
    smartTable: {},
    filterFunctions: {
      Number: ['Equal to', 'Less than', 'Greater than', 'In between'],
      Date: ['On date', 'Before date', 'After date', 'In between dates'],
      String: ['Equal to', 'Starts with', 'Ends With', 'Contains'],
    },
    showTableSearch: false,
    showColumnSearch: false,
    showRowSelectionBox: false,
    showColumnSelectionBox: false,
    selectedRows: [],
    selectedColumns: [],
    selectHandler: () => { },
    selectActionText: 'Select',
  },
  namespaced: true,
  mutations: {
    setTable(state, payload) {
      state.smartTable = new TableObject(payload);
    },
    toggleColumnSearch(state) {
      state.showColumnSearch = !state.showColumnSearch;
    },
    pushColumn(state, payload) {
      state.smartTable.pushColumn(payload.name, payload.type);
      state.smartTable.dataObject.rowArray = state.smartTable.dataObject.rowArray;
    },
    removeColumn(state, columnName) {
      state.smartTable.removeColumn(columnName);
    },
    removeMultipleColumns(state, columnNameList) {
      state.smartTable.removeMultipleColumns(columnNameList);
    },
    pushRow(state, payload) {
      state.smartTable.pushRow(payload);
    },
    removeRow(state, rowIndex) {
      state.smartTable.removeRow(rowIndex);
    },
    removeMultipleRows(state, rowList) {
      state.smartTable.removeMultipleRows(rowList);
    },
    removeRowsAndColumns(state, payload) {
      state.smartTable.removeMultipleRows(payload.rows);
      state.smartTable.removeMultipleColumns(payload.columns);
    },
    createFilter(state, payload) {
      state.smartTable.createFilter(payload);
    },
    createGraph(state, payload) {
      state.smartTable.graphManager.createGraph(payload);
    },
    editCell(state, { rowIndex, columnName, value }) {
      state.smartTable.editCell(rowIndex, columnName, value);
      Vue.set(state.smartTable.processedDataObject, 'rowArray', state.smartTable.processedDataObject.rowArray);
    },
    toggleRowSelection(state, rowIndex) {
      const index = state.selectedRows.indexOf(rowIndex);
      if (index !== -1) { // If row index is found to be in the selected rows array then...
        // Delete that index from the selected rows array.
        state.selectedRows.splice(rowIndex, 1);
      } else {
        // If not then you need to add it to the selected rows array.
        state.selectedRows.push(rowIndex);
      }
    },
    toggleShowRowSelectionBox(state) {
      state.showRowSelectionBox = !state.showRowSelectionBox;
    },
    toggleShowColumnSelectionBox(state) {
      state.showColumnSelectionBox = !state.showColumnSelectionBox;
    },
    setSelectHandler(state, handler) {
      state.selectHandler = handler;
    },
    setSelectActionText(state, text) {
      state.selectActionText = text;
    },
    setSelectedRows(state, payload) {
      state.selectedRows = payload;
    },
    setSelectedColumns(state, payload) {
      state.selectedColumns = payload;
    },
  },
  getters: {
    getTable: state => state.smartTable,
    getShowTableSearch: state => state.showTableSearch,
    getShowColumnSearch: state => state.showColumnSearch,
    getShowRowSelectionBox: state => state.showRowSelectionBox,
    getShowColumnSelectionBox: state => state.showColumnSelectionBox,
    getTableName: state => state.smartTable.name,
    getNumberofRows: (state, getters) => getters.getRowArray.numberofRows,
    getNumberofColumns: (state, getters) => getters.getColumnArray.numberofColumns,
    getRowArray: (state, getters) => getters.getTable.dataObject.rowArray,
    getTableFilterManager: state => state.smartTable.filterManager,
    getActivatedFilters: (state, getters) => getters.getTableFilterManager.activatedFilters,

    getRowList: (state, getters) => getters.getDataObject.rowArray.rowList,
    getRowData: (state, getters) => rowIndex => getters.getRowList[rowIndex],
    getColumnByIndex: (state, getters) => index =>
      getters.getDataObject.columnArray.getColumnByIndex(index),
    getColumnArray: (state, getters) => getters.getTable.dataObject.columnArray,
    getColumnList: (state, getters) => getters.getColumnArray.columnList,
    getFilterFunctions: state => state.filterFunctions,
    getGraphManager: (state, getters) => getters.getTable.graphManager,
    getGraphList: (state, getters) => getters.getGraphManager.graphList,

    // Processed Data Object Getters:
    getProcessedDataArray: (state, getters) => getters.getDataObject.rowArray,
    getProcessedDataRowList: (state, getters) => getters.getProcessedDataArray.rowList,
    getDataObject: (state, getters) => getters.getTable.processedDataObject,

    // Row or Column Selection Getters:
    getSelectedRows: state => state.selectedRows,
    getSelectedColumns: state => state.selectedColumns,
    getSelectHandler: state => state.selectHandler,
    getSelectActionText: state => state.selectActionText,
  },
};

export default {
  name: 'SmartTableManager',
  components: { TableView, GraphView },
  props: {
    tableArgs: {
      type: Object,
      default() { return {}; },
    },
    options: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false,
    };
  },
  methods: {
    ...mapMutations('JSQL', [
      'setTable',
    ]),
  },
  created() {
    if (!this.$store.JSQL) {
      this.$store.registerModule('JSQL', store);
    }
    this.setTable(this.tableArgs);
  },
  mounted() {
    this.$emit('mounted');
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberofRows',
      // ...
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
