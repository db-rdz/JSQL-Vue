<template>
  <thead>
    <tr><th v-for="index in getNumberofColumns" :key="index">
      {{ getColumnByIndex(index - 1).name }}
    </th></tr>
    <tr><th v-for="index in getNumberofColumns" :key="index">
      <column-search :columnIndex="index - 1"></column-search>
    </th></tr>
  </thead>
</template>

<script>
import { mapGetters } from 'vuex';
import ColumnSearch from './ColumnSearch/ColumnSearch';

export default {
  name: 'TableHeader',
  components: { ColumnSearch },
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
