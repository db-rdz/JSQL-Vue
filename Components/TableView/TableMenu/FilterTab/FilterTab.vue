<template>
  <div style="display: inline;" v-if="canUseMainMenuItem">
    <filter-manager-modal id='filter-manager'
    ></filter-manager-modal>
    <a :class="{ 'disabled': !isFilterItemValid }"
      class="item" @click="openFilterManager" style="float: left;">
      <i class="filter icon"></i>
    </a>
  </div>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
import FilterManagerModal from '../../../../Components/Modals/FilterManagerModal/FilterManagerModal.vue';

export default {
  name: 'FilterTab',
  components: { FilterManagerModal },
  methods: {
    openFilterManager() {
      if (this.isFilterItemValid) {
        $('#filter-manager').modal('show');
      }
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getNumberofColumns',
      'getTableFilterManager',
    ]),
    canUseMainMenuItem() {
      return this.getTable.options.allowFiltering;
    },
    isFilterItemValid() {
      if (this.getNumberofColumns === 0) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>

</style>
