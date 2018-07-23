import { TableObject } from 'jsql-smarttable';

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
    tableHandlers: {},
  },
  namespaced: true,
  mutations: {
    // Table Functions
    setTable(state, payload) {
      state.smartTable = new TableObject(payload);
    },
    setTableHandlers(state, handlers) {
      state.tableHandlers = handlers;
    },
    editTableName(state, tableName) {
      state.smartTable.editTableName(tableName);
    },

    // Column Functions
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
    editColumnName(state, { oldColumnName, newColumnName }) {
      state.smartTable.editColumnName(oldColumnName, newColumnName);
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
    },
    editFilter(state, { currentFilterTag, filterArgs }) {
      state.smartTable.filterManager.editFilter(currentFilterTag, filterArgs);
    },
    offFilter(state, filterTag) {
      state.smartTable.deactivateFilter({ filterTag });
    },
    toggleRowSelection(state, rowIndex) {
      const index = state.selectedRows.indexOf(rowIndex);
      if (index !== -1) { // If row index is found to be in the selected rows array then...
        // Delete that index from the selected rows array.
        state.selectedRows.splice(index, 1);
      } else {
        // If not then you need to add it to the selected rows array.
        state.selectedRows.push(rowIndex);
      }
    },
    toggleColumnSelection(state, columnIndex) {
      const foundAtIndex = this.getSelectedColumns.indexOf(columnIndex);
      // If column index is found to be in the selected columna array then...
      if (foundAtIndex !== -1) { 
        // Delete that index from the selected columna array.
        this.getSelectedColumns.splice(this.foundAtIndex, 1);
      } else {
        // If not then you need to add it to the selected columna array.
        this.getSelectedColumns.push(this.column.index);
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
    getTableHandlers: state => state.tableHandlers,
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
    getColumnList: (state, getters) => getters.getDataObject.columnArray.columnList,
    getRowData: (state, getters) => rowIndex => getters.getRowList[rowIndex],
    getColumnByIndex: (state, getters) => index =>
      getters.getDataObject.columnArray.getColumnByIndex(index),
    getColumnArray: (state, getters) => getters.getTable.dataObject.columnArray,
    getFilterFunctions: state => state.filterFunctions,
    getGraphManager: (state, getters) => getters.getTable.graphManager,
    getGraphList: (state, getters) => getters.getGraphManager.graphList,

    // Filters
    getFilters: state => state.smartTable.filterManager.filterList,

    // Processed Data Object Getters:
    getProcessedDataRowArray: (state, getters) => getters.getDataObject.rowArray,
    getProcessedDataRowList: (state, getters) => getters.getProcessedDataRowArray.rowList,
    getProcessedDataColumnArray: (state, getters) => getters.getDataObject.columnArray,
    getProcessedDataColumnList: (state, getters) => getters.getProcessedDataColumnArray.columnList,
    getDataObject: (state, getters) => getters.getTable.processedDataObject,

    // Row or Column Selection Getters:
    getSelectedRows: state => state.selectedRows,
    getSelectedColumns: state => state.selectedColumns,
    getSelectHandler: state => state.selectHandler,
    getSelectActionText: state => state.selectActionText,
  },
};

export default store;
