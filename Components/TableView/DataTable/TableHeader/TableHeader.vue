<template>
  <thead>
    <tr><th v-for="index in getNumberofColumns" :key="index">
      {{ getColumnByIndex(index - 1).name }}
    </th></tr>
  </thead>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableHeader',
  props: {
    columnArray: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters([
      'getTable',
      'getTableName',
      'getColumnByIndex',
      'getNumberofColumns',
      // ...
    ]),
  },
};
</script>

<style>

</style>
