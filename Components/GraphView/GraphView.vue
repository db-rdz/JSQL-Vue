<template>
  <div>
    <h3 class="ui top attached header">
      {{ getTableName }}
    </h3>
    <graph-view-menu class="attached"></graph-view-menu>
    <div class="ui top attached tabular menu">
      <a class="item" v-for="(graph, index) in getGraphList"
        @click="toggleItem(index)"
        :class="index === selectedGraphIndex ? 'active' : ''"
        :index="index" :key="index">
        {{ graph.options.title.text }}
      </a>
    </div>
    <div class="ui bottom attached segment">
      <div v-if="getGraphList.length > 0">
        <graph-object :graph="selectedGraph"
        ></graph-object>
      </div>
      <div v-else>
        No Graphs made.
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GraphViewMenu from './GraphViewMenu/GraphViewMenu.vue';
import GraphObject from './GraphObject/GraphObject.vue';

export default {
  name: 'GraphView',
  components: { GraphObject, GraphViewMenu },
  props: {
    name: {
      default: '',
    },
  },
  data() {
    return {
      selectedGraphIndex: 0,
    };
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getTableName',
      'getNumberofRows',
      'getDataObject',
      'getGraphList',
      // ...
    ]),
    selectedGraph() {
      return this.getGraphList[this.selectedGraphIndex];
    },
  },
  methods: {
    toggleItem(graphIndex) {
      this.selectedGraphIndex = graphIndex;
    },
  },
};
</script>

<style>

</style>
