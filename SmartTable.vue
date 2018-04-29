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
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import JSQL from 'jsql-smarttable';
import TableView from './Components/TableView/TableView';

const { mapGetters } = Vuex;

Vue.use(Vuex);

const jsql = new JSQL({ name: 'table-holder' });
const store = new Vuex.Store({
  state: {
    tableName: '',
    smartTable: null,
    filterFunctions: {
      Number: ['Equal to', 'Less than', 'Greater than', 'In between'],
      Date: ['On date', 'Before date', 'After date', 'In between dates'],
      String: ['Equal to', 'Starts with', 'Ends With', 'Contains'],
    },
  },
  mutations: {
    addTable(state, payload) {
      state.tableName = payload.tableName;
      state.smartTable = jsql.addTable(payload.tableName);
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
  },
  getters: {
    getTable: state => state.smartTable,
    getTableName: state => state.tableName,
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
  },
});

export default {
  name: 'SmartTableManager',
  components: { TableView },
  store,
  props: {
    read_api: {
      type: String,
    },
    write_api: {
      type: String,
    },
    tableName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: true,
    };
  },
  created() {
    this.$store.commit('addTable', { tableName: this.tableName });
    this.$store.commit('pushColumn', { name: 'Name', type: 'String' });
    this.$store.commit('pushColumn', { name: 'name2', type: 'String' });
    this.$store.commit('pushColumn', { name: 'name3', type: 'String' });
    this.$store.commit('pushColumn', { name: 'name4', type: 'Number' });
    this.$store.commit('pushRow', ['Daniel']);
    this.$store.commit('pushRow', ['Raul']);
    this.$store.commit('pushRow', ['Benjamin']);
    this.$store.commit('pushRow', ['Daniel']);
    this.$store.commit('createFilter', { targetColumn: 'Name', filterFunction: 'equalTo', parameters: 'Daniel', tag: 'test1' });
    this.loading = false;
  },
  mounted() {
  },
  computed: {
    ...mapGetters([
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
