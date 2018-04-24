<template>
  <div>
    <div v-if="!isFilterFormShowing">
      <filter-object v-for="(filter, index) in filterManager.filterList"
        @editFilter="editFilter(filter)"
        :key="index" :filter="filter"
      ></filter-object>
    </div>
    <br/>
    <filter-form v-if="isFilterFormShowing" :filter="editingFitler"></filter-form>
    <button class="ui primary button" v-if="!isFilterFormShowing" @click="createFilter">
      Create Filter
    </button>

    <button class="ui secondary button" v-if="isFilterFormShowing" @click="toggleFilterForm">
      Go Back
    </button>
    <button class="ui primary button" v-if="isFilterFormShowing"> Save/Create Filter </button>
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
      editingFitler: null,
    };
  },
  methods: {
    toggleFilterForm() {
      this.isFilterFormShowing = !this.isFilterFormShowing;
    },
    editFilter(filter) {
      this.editingFitler = filter;
      this.isFilterFormShowing = true;
    },
    createFilter() {
      this.filter = null;
      this.isFilterFormShowing = true;
    },
  },
};
</script>

<style>

</style>
