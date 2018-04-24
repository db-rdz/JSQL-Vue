<template>
  <div class="ui form">
    <div class="three fields">
      <div class="field">
        <label>Tag/Name your filter:</label>
        <input type="text" placeholder="Filter Name" :value="filter.tag">
      </div>
    </div>


    <div class="three fields">
      <div class="field">
        <label>Apply your filter to a column:</label>
        <div class="ui selection dropdown">
            <input type="hidden" @change="targetColumnUpdate" name="gender">
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
            <div class="menu">
              <div v-for="index in getNumberofColumns"
                :key="index" class="item" :data-value="getColumnByIndex(index - 1).name">
                {{ getColumnByIndex(index - 1).name }}
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="three fields">
      <div class="field">
        <label>Select how to filter your data:</label>
        <div class="ui selection dropdown" :class="{ disabled: !columnType }">
            <input @change="filterFunctionUpdate" type="hidden" name="gender">
            <i class="dropdown icon"></i>
            <div class="default text">Choose a filter function:</div>
            <div class="menu">
              <div v-for="(filter, index) in filterFunctions" :key="index" class="item">
                {{ filter }}
              </div>
            </div>
        </div>
      </div>

      <div class="field" v-for="index in numberOfArguments" :key="index">
        <label>Argument {{index}}</label>
        <input type="text" placeholder="First Name">
      </div>

    </div>

  </div>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';

export default {
  name: 'FilterForm',
  props: {
    filter: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      columnType: null,
      columnObject: null,
      selectedFilterFunction: null,
    };
  },
  methods: {
    targetColumnUpdate(e) {
      this.columnObject = this.getColumnList[e.target.value];
      this.columnType = this.getColumnList[e.target.value].type;
      this.selectedFilterFunction = null;
    },
    filterFunctionUpdate(e) {
      this.selectedFilterFunction = e.target.value;
    },
  },
  computed: {
    ...mapGetters([
      'getColumnByIndex',
      'getRowData',
      'getNumberofColumns',
      'getFilterFunctions',
      'getColumnList',
    ]),
    filterFunctions() {
      return this.getFilterFunctions[this.columnType];
    },
    numberOfArguments() {
      switch (this.selectedFilterFunction) {
        case 'in between': {
          return 2;
        }
        case 'In Between Dates': {
          return 2;
        }
        default: {
          return 1;
        }
      }
    },
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
};
</script>

<style>

</style>
