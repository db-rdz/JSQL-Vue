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
          {{ this.getNumberOfRows }} Entries
        </a>
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
  },
  mutations: {
    addTable(state, payload) {
      state.tableName = payload.tableName;
      state.smartTable = jsql.addTable(payload.tableName);
    },
  },
  getters: {
    getTable: state => state.smartTable,
    getTableName: state => state.tableName,
    getNumberOfRows: (state, getters) => getters.getTable.getNumberofRows(),
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
    this.loading = false;
  },
  computed: {
    ...mapGetters([
      'getTable',
      'getTableName',
      'getNumberOfRows',
      // ...
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
