<template>
  <div class="hello">
    <div class="ui card" v-if="!loading">
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
    <div v-else>
      <div class="ui segment">
        <div class="ui active loader"></div>
        <p></p>
      </div>
    </div>
    <table-view></table-view>
    <br><br><br>
    <graph-view></graph-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { TableObject } from 'jsql-smarttable';
import VeeValidate from 'vee-validate';
import TableView from './Components/TableView/TableView';
import GraphView from './Components/GraphView/GraphView';

const { mapGetters, mapMutations } = Vuex;

Vue.use(VeeValidate);
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
  },
  namespaced: true,
  mutations: {
    setTable(state, payload) {
      state.smartTable = new TableObject(payload);
    },
    pushColumn(state, payload) {
      state.smartTable.pushColumn(payload.name, payload.type);
      state.smartTable.dataObject.rowArray = state.smartTable.dataObject.rowArray;
    },
    pushRow(state, payload) {
      state.smartTable.pushRow(payload);
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
  },
  getters: {
    getTable: state => state.smartTable,
    getTableName: state => state.smartTable.name,
    getNumberofRows: (state, getters) => getters.getRowArray.numberofRows,
    getNumberofColumns: (state, getters) => getters.getColumnArray.numberofColumns,
    getRowArray: (state, getters) => getters.getTable.dataObject.rowArray,
    getTableFilterManager: state => state.smartTable.filterManager,
    getDataObject: (state, getters) => getters.getTable.processedDataObject,
    getRowList: (state, getters) => getters.getDataObject.rowArray.rowList,
    getRowData: (state, getters) => rowIndex => getters.getRowList[rowIndex],
    getColumnByIndex: (state, getters) => index =>
      getters.getDataObject.columnArray.getColumnByIndex(index),
    getColumnArray: (state, getters) => getters.getTable.dataObject.columnArray,
    getColumnList: (state, getters) => getters.getColumnArray.columnList,
    getFilterFunctions: state => state.filterFunctions,
    getGraphManager: (state, getters) => getters.getTable.graphManager,
    getGraphList: (state, getters) => getters.getGraphManager.graphList,
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
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: true,
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
