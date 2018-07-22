<template>
  <div>
    <div>
      <filter-object v-for="(filter, index) in getFilters"
        @editFilter="editFilter(filter)"
        :key="index" :filter="filter"
      ></filter-object>
    </div>
    <br/>
    <filter-form
      @close="toggleFilterForm" v-if="isFilterFormShowing" :filter="editingFilter"
    ></filter-form>
    <button class="ui primary button" v-if="!isFilterFormShowing" @click="createFilter">
      <i class="ui plus icon"></i> Filter
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilterForm from '../Forms/FilterForm/FilterForm.vue';
import FilterObject from './FilterObject/FilterObject.vue';


export default {
  name: 'FilterManager',
  components: { FilterForm, FilterObject },
  data() {
    return {
      isFilterFormShowing: false,
      editingFilter: {},
    };
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTableFilterManager',
      'getFilters',
      'getTableHandlers',
    ]),
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
