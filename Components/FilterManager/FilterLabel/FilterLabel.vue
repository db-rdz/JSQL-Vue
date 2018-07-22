<template>
  <a class="ui label">
    {{ filter.tag }}
    <i class="delete icon" @click="disableFilter"></i>
  </a>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'FilterLabel',
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations('JSQL', [
      'offFilter',
    ]),
    disableFilter() {
      if (this.getTableHandlers.disableFilterHandler) {
        this.getTableHandlers.disableFilterHandler(this.filter.tag);
      } else {
        this.offFilter(this.filter.tag);
      }
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getFilterManager',
      'getTableHandlers',
    ]),
  },
};
</script>

<style>

</style>
