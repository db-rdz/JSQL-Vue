<template>
  <div>
    <h3 class="ui top attached header">
      {{ getTableName }}
    </h3>
    <table-menu :data="menuData" class="attached"></table-menu>
    <data-table></data-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TableMenu from './TableMenu/TableMenu';
import DataTable from './DataTable/DataTable';

export default {
  name: 'TableView',
  components: { TableMenu, DataTable },
  props: {
    name: {
      default: '',
    },
  },
  data() {
    return {
      menuData: [
        { item: 'plus', subItems: ['Row', 'Column'] },
        { item: 'trash' },
        { item: 'search', subItems: ['Column', 'Row'] },
        { item: 'filter', subItems: ['Show', 'Manage'] },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'getTable',
      'getTableName',
      'getNumberofRows',
      'getDataObject',
      // ...
    ]),
  },
};
</script>

<style>

</style>
