<template>
  <div class="ui form">
    <div class="field">
      <a class="item pointer" @click="editFilter" ><i class="cog icon"></i></a>
      <div class="ui toggle icon checkbox">
        <input @change="toggleFilter(filter)"
        type="checkbox" name="gift" tabindex="0" class="hidden">
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
  mounted() {
    $('.checkbox').checkbox();
  },
  methods: {
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
