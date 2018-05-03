<template>
  <canvas ref="graphPreview" width="800" height="450"></canvas>
</template>

<script>
import { mapGetters } from 'vuex';
import Chart from 'chart.js';

export default {
  name: 'GraphPreview',
  methods: {
  },
  computed: {
    ...mapGetters('graphFormStore', [
      'getGraph',
    ]),
  },
  mounted() {
    // this.$store.getters['graphFormStore/getGraph']
    this.chartObject = new Chart(this.$refs.graphPreview, {
      type: 'bar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050',
        },
      },
    });
  },
};
</script>

<style>

</style>
