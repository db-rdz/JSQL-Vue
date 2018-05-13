<template>
  <canvas ref="graphPreview" width="800" height="450"></canvas>
</template>

<script>
import { mapGetters } from 'vuex';
import Chart from 'chart.js';

export default {
  name: 'GraphPreview',
  props: {
    graph: {
      type: Object,
    },
  },
  methods: {
  },
  computed: {
    ...mapGetters('graphFormStore', [
      'getGraph',
    ]),
  },
  mounted() {
    if (this.graph !== null) {
      this.chartObject = new Chart(this.$refs.graphPreview, this.graph.getChart());
    }
  },
};
</script>

<style>

</style>
