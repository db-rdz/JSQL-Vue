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
import TableView from './Components/TableView/TableView.vue';
import GraphView from './Components/GraphView/GraphView.vue';

import Store from './Store';

const { mapGetters, mapMutations } = Vuex;

Vue.use(Vuex);

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
    handlers: {
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
      'setTableHandlers',
    ]),
  },
  created() {
    if (!this.$store.JSQL) {
      this.$store.registerModule('JSQL', Store);
    }
    this.setTable(this.tableArgs);
    this.setTableHandlers(this.handlers);
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
