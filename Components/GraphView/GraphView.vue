<template>
  <div>
    <h3 class="ui top attached header">
      {{ getTableName }}
    </h3>
    <graph-view-menu class="attached"></graph-view-menu>
    <br><p></p>
    <div class="ui four cards">
      <graph-object></graph-object>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GraphViewMenu from './GraphViewMenu/GraphViewMenu';
import GraphObject from './GraphObject/GraphObject';

export default {
  name: 'TableView',
  components: { GraphObject, GraphViewMenu },
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
