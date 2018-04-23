<template>
  <tr>
    <td v-for="index in getNumberofColumns"
      :key="index"> {{ rowObject.rowData[index - 1] }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableRow',
  props: {
    rowObject: {
      type: Object,
    },
    rowIndex: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters([
      'getColumnByIndex',
      'getRowData',
      'getNumberofColumns',
    ]),
  },
};
</script>

<style>

</style>
