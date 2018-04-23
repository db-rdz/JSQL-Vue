<template>
  <div>
    <div>
      <filter-object v-for="(filter, index) in filterManager.filterList"
        :key="index" :filter="filter"
      ></filter-object>
    </div>
    <filter-form></filter-form>
    <button class="ui primary button" v-if="isFilterFormShowing"> Save </button>
    <button class="ui secondary button"> Go Back </button>
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
    };
  },
};
</script>

<style>

</style>
