<template>
  <div class="ui menu" id="#table-menu" stlye="height: 100%">
    <div style="display: inline;">
      <add-tab></add-tab>
      <remove-tab></remove-tab>
      <search-tab></search-tab>
      <filter-tab></filter-tab>
    </div>
    <div class="ui right aligned category search item">
      <div class="ui transparent icon input">
        <input @keyup="searchTable" class="prompt" type="text" placeholder="Search Table">
        <i class="search link icon"></i>
      </div>
    </div>
    <div style="display: inline;">
      <a class="item">
        <i class="chart bar icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
/* global $ */
import { mapGetters, mapMutations } from 'vuex';
import AddTab from './AddTab/AddTab.vue';
import RemoveTab from './RemoveTab/RemoveTab.vue';
import SearchTab from './searchTab/SearchTab.vue';
import FilterTab from './FilterTab/FilterTab.vue';


// v-for="(key, item, index) in data" :key="index" :index="index"
export default {
  name: 'TableMenu',
  components: { AddTab, RemoveTab, SearchTab, FilterTab },
  props: {
    data: {
      required: false,
    },
    addRowButtonHandler: {
      type: Function,
    },
    removeRowButtonHandler: {
      type: Function,
    },
    addColumnButtonHandler: {
      type: Function,
    },
    removeColumnButtonHandler: {
      type: Function,
    },
  },
  data() {
    return {
      openedMenuItem: null,
      isRemoveTabExpanded: false,
      isSearchTabExpanded: false,
    };
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getShowRowSelectionBox',
    ]),
    removeRowHandler() {
      if (this.removeRowButtonHandler !== undefined) {
        return this.removeRowButtonHandler;
      }
      return this.removeMultipleRows;
    },
  },
  methods: {
    ...mapMutations('JSQL', [
      'removeRowsAndColumns',
      'toggleShowRowSelectionBox',
      'toggleShowColumnSelectionBox',
      'setSelectHandler',
    ]),
    displayRowSelectionForRemoval() {
      this.toggleShowRowSelectionBox();
      if (this.getShowRowSelectionBox) {
        this.setSelectHandler(this.removeRowHandler);
      }
    },
    displayColumnSelectionForRemoval() {
      this.toggleShowColumnSelectionBox();
    },
    searchTable(e) {
      this.getTable.searchTable(e.target.value);
    },
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
};
</script>

<style>

</style>
