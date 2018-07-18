<template>
  <div class="row">
    <filter-label v-for="(filter, index) in getActivatedFilters"
    :key="index" :filter="filter" style="float: left;">
    </filter-label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilterLabel from '../../FilterManager/FilterLabel/FilterLabel.vue';

export default {
  name: 'FilterLabelRow',
  components: { FilterLabel },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getActivatedFilters',
      'getNumberofColumns',
      'getNumberofRows',
    ]),
  },
};
</script>

<style>

</style>
