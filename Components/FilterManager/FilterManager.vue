<template>
  <div>
    <div v-if="!isFilterFormShowing">
      <filter-object v-for="(filter, index) in filterManager.filterList"
        @editFilter="editFilter(filter)"
        :key="index" :filter="filter"
      ></filter-object>
    </div>
    <br/>
    <filter-form
      @close="toggleFilterForm" v-if="isFilterFormShowing" :filter="editingFilter"
    ></filter-form>
    <button class="ui primary button" v-if="!isFilterFormShowing" @click="createFilter">
      Create Filter
    </button>
  </div>
</template>

<script>

import FilterForm from '../Forms/FilterForm/FilterForm';
import FilterObject from './FilterObject/FilterObject';


export default {
  name: 'FilterManager',
  components: { FilterForm, FilterObject },
  props: {
    filterManager: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      isFilterFormShowing: false,
      editingFilter: {},
    };
  },
  methods: {
    toggleFilterForm() {
      this.isFilterFormShowing = !this.isFilterFormShowing;
    },
    editFilter(filter) {
      this.editingFilter = filter;
      this.isFilterFormShowing = true;
    },
    createFilter() {
      this.editingFilter = {};
      this.isFilterFormShowing = true;
    },
  },
};
</script>

<style>

</style>
