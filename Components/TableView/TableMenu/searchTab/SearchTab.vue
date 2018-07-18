<template>
  <div style="display: inline;"
    v-if="canUseMainMenuItem">
    <a :class="{ 'disabled' : !isMenuItemValid }"
      class="item" style="float: left;" v-if="getTable.options.allowColumnSearching"
      @click="toggleColumnSearch">
      <i class="search icon"></i>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SearchTab',
  methods: {
    ...mapMutations('JSQL', [
      'toggleColumnSearch',
    ]),
    handleColumnSearch() {
      if (this.isMenuItemValid) {
        this.toggleColumnSearch();
      }
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getNumberofColumns',
    ]),
    canUseMainMenuItem() {
      return this.getTable.options.allowTableSearching || this.getTable.options.allowColumnSearching;
    },
    isMenuItemValid() {
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
