<template>
      <canvas id="chartJSContainer" ref="graphView" width="600" height="200"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'GraphObject',
  props: {
    graph: {
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      graphObject: {},
    };
  },
  mounted() {
    const options = this.graph.getChart();
    options.type = 'line';
    const ctx = document.getElementById('chartJSContainer').getContext('2d');
    this.chart = new Chart(ctx, options);
  },
};
</script>

<style>

</style>
