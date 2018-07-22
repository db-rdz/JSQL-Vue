<template>
  <div class="ui form">
    <div class="field">
      <span v-if="filter.status"> ACTIVE </span>
      <a class="item pointer" @click="editFilter" ><i class="cog icon"></i></a>
      <div class="ui icon toggle checkbox" >
        <input @change="toggleFilter(filter)" type="checkbox" :checked="filter.status">
        <label><h4 class="ui header"> {{ filter.tag }} </h4></label>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';

export default {
  name: 'FilterObject',
  props: {
    filter: {
      type: Object,
      default() { return {}; },
    },
  },
  updated() {
  },
  mounted() {
  },
  methods: {
    setCheckbox() {
      if (this.filter.status) {
        $('.checkbox').checkbox('set checked');
      } else {
        $('.checkbox').checkbox('set unchecked');
      }
    },
    editFilter() {
      this.$emit('editFilter', this.filter);
    },
    toggleFilter(filter) {
      if (!filter.status) {
        this.getTable.activateFilter({ filterTag: filter.tag });
      } else {
        this.getTable.deactivateFilter({ filterTag: filter.tag });
      }
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTableFilterManager',
      'getTable',
    ]),
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
