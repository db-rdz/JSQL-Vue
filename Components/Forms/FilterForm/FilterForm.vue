<template>
  <div class="ui form">
    <div class="three fields">
      <div class="field">
        <label>Tag/Name your filter:</label>
        <input type="text" placeholder="Filter Name" :value="tag">
      </div>
    </div>


    <div class="three fields">
      <div class="field">
        <label>Apply your filter to a column:</label>
        <div class="ui selection dropdown">
            <input ref="targetColumn" type="hidden" @change="targetColumnUpdate"
              name="filterColumn" :value="selectedColumn">
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
            <div class="menu">
              <div v-for="index in getNumberofColumns"
                :key="index" class="item"
                :class="isSelectedTargetColumn(index - 1) ? ' active selected' : ''"
                :data-value="getColumnByIndex(index - 1).name">
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
            <input @change="filterFunctionUpdate" type="hidden" name="gender"
              :value="selectedFilterFunction">
            <i class="dropdown icon"></i>
            <div class="default text">Choose a filter function:</div>
            <div class="menu">
              <div v-for="(filter, index) in filterFunctions" :key="index" class="item"
              :class="isSelectedFilterFunction(filter) ? ' active selected' : ''"
              :data-value="camelize(filter)">
                {{ filter }}
              </div>
            </div>
        </div>
      </div>

      <div class="field" v-for="index in numberOfArguments" :key="index">
        <label>Argument {{index}}</label>
        <input type="text" placeholder="First Name"
          :value="getArgumentValue(index - 1)">
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
    const tag = this.filter.tag || '';
    const selectedColumn = this.filter.targetColumn || '';
    const selectedFilterFunction = this.filter.filterFunction || '';
    const passedParams = this.filter.parameters || '';
    const parameterOne = passedParams.constructor === Array ? passedParams[0] : passedParams;
    const parameterTwo = passedParams.constructor === Array ? passedParams[1] : '';

    return {
      columnType: null,
      columnObject: null,
      tag,
      selectedColumn,
      selectedFilterFunction,
      parameterOne,
      parameterTwo,
    };
  },
  methods: {
    targetColumnUpdate(e) {
      this.columnObject = this.getColumnList[e.target.value];
      this.columnType = this.columnObject.type;
      this.selectedColumn = this.columnObject.name;
      this.selectedFilterFunction = null;
    },
    filterFunctionUpdate(e) {
      this.selectedFilterFunction = e.target.value;
    },
    // Note: the index var starts at 1
    isSelectedTargetColumn(index) {
      const selectedColumn = this.getColumnByIndex(index).name;
      return selectedColumn === this.filter.targetColumn;
    },
    isSelectedFilterFunction(filterFunction) {
      return this.selectedFilterFunction === this.camelize(filterFunction);
    },
    camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
    },
    getArgumentValue(index) {
      if (index === 0) {
        return this.parameterOne;
      }
      return this.parameterTwo;
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
        case 'inBetween': {
          return 2;
        }
        case 'inBetweenDates': {
          return 2;
        }
        default: {
          return 1;
        }
      }
    },
  },
  created() {
    if (this.filter.targetColumn) {
      this.columnObject = this.getColumnList[this.filter.targetColumn];

      this.tag = this.filter.tag;
      this.columnType = this.columnObject.type;
      this.selectedColumn = this.columnObject.name;
      this.selectedFilterFunction = this.filter.filterFunction;
    }
  },
  mounted() {
    $('.ui.dropdown').dropdown();
    $(this.$refs.targetColumn).val(this.filter.targetColumn);
  },
  updated() {
    // I need this line here because the dropdown for the filterfunctions refreshes depending on
    // The column type of the selected column. In order for the dropdown to work properly
    // We need to refresh all its values by initializing the dropdown again with semantics ui.
    $('.ui.dropdown').dropdown();
  },
};
</script>

<style>

</style>
