<template>
  <form class="ui form">
    <h4 class="ui dividing header">Graph Options</h4>

    <div class="three fields">
      <div class="field">
        <label>Graph Title</label>
        <div class="field">
          <input type="text"
            id="title"
            v-model="graph.options.title.text"
            name="title"
            placeholder="Graph Title">
        </div>
      </div>
    </div>

    <div class="three fields">
      <div class="field">
        <label>Show Graph Title</label>
        <div class="ui toggle checkbox">
          <input
          v-model="graph.options.title.display"
          type="checkbox" name="gift" tabindex="0" class="hidden">
        </div>
      </div>
    </div>

    <h4 class="ui dividing header">X-Axis</h4>
    <div class="three fields">

      <div class="field">
        <label>Choose a column as your x-axis:</label>
        <div class="ui selection dropdown">
            <input
              name="xAxisTargetColumn"
              v-model="graph.dataGrouper.targetColumn"
              @change="graph.dataGrouper.targetColumn=$event.target.value"
              ref="target-column" type="hidden"
            >
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
            <div class="menu">
              <div v-for="index in getNumberofColumns"
                :key="index" class="item"
                :data-value="getColumnByIndex(index - 1).name">
                {{ getColumnByIndex(index - 1).name }}
              </div>
            </div>
        </div>
      </div>

      <div class="field">
        <label>Choose a grouping function:</label>
        <div class="ui selection dropdown">
            <input
              v-model="graph.dataGrouper.groupingType"
              @change="graph.dataGrouper.groupingType=$event.target.value"
              ref="target-column" type="hidden"
              name="xAxisGroupingFunction"
            >
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
            <div class="menu">
              <div class="item" data-value="Value">
                  Value
              </div>
            </div>
        </div>
      </div>
    </div>

    <h4 class="ui dividing header">Y-Axis Options</h4>

    <div class="three fields">
      <div class="field">
        <label>Y-Axis Label</label>
        <div class="field">
          <input
          v-model="graph.dataGrouper.yAxis.label"
          type="text" name="yAxisLabel" placeholder="First Name">
        </div>
      </div>

      <div class="field">
        <label>Y-Axis Color</label>
        <div class="field">
          <input
          v-model="graph.dataGrouper.yAxis.color"
          type="color" name="favcolor" value="#ff0000">
        </div>
      </div>
    </div>

    <h4 class="ui dividing header">Y-Axis Value</h4>

    <div class="three fields">


      <div class="field">
        <label>Choose a column as your y-axis:</label>
        <div class="ui selection dropdown">
            <input
              id="test"
              @change="graph.dataGrouper.yAxis.dataAction.targetColumn = $event.target.value"
              v-model="graph.dataGrouper.yAxis.dataAction.targetColumn"
              ref="target-column" type="hidden"
              name="yAxisTargetColumn"
            >
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
            <div class="menu">
              <div v-for="index in getNumberofColumns"
                :key="index" class="item"
                :data-value="getColumnByIndex(index - 1).name">
                {{ getColumnByIndex(index - 1).name }}
              </div>
            </div>
        </div>
      </div>

      <div class="field">
        <label>Data action:</label>
        <div class="ui selection dropdown">
            <input ref="target-column" type="hidden"
              @change="graph.dataGrouper.yAxis.dataAction.actionType = $event.target.value"
              v-model="graph.dataGrouper.yAxis.dataAction.actionType"
              name="yAxisDataAction"
            >
            <i class="dropdown icon"></i>
            <div class="default text">Choose an action:</div>
            <div class="menu">
              <div class="item" data-value="addColumn">
                Sum
              </div>
              <div class="item" data-value="averageColumn">
                Average
              </div>
              <div class="item" data-value="countColumn">
                Count
              </div>
            </div>
        </div>
      </div>
    </div>

    <button class="ui secondary button" @click="goBack">
      Go Back
    </button>
    <button class="ui primary button" @click="createGraph">
      Save/Create Graph
    </button>
  </form>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
import GraphFormValidator from './GraphFormValidator';

export default {
  name: 'GraphForm',
  props: {
    graphToEdit: {
      type: Object,
    },
  },
  mixins: [GraphFormValidator],
  data() {
    const graph = this.graphToEdit ? this.graphToEdit.getConstructingArguments : {
      options: {
        title: {
          display: true,
          text: '',
        },
      },
      graphType: '',
      dataGrouper: {
        groupingType: '',
        targetColumn: '',
        yAxis: {
          dataAction: {
            actionType: '',
            targetColumn: '',
            color: '',
          },
          label: '',
          color: '',
        },
      },
    };

    return { graph };
  },
  watch: {
    graph() {
      this.$emit('graphChange', this.graph);
    },
  },
  computed: {
    ...mapGetters([
      'getColumnByIndex',
      'getNumberofColumns',
      // ...
    ]),
  },
  methods: {
    createGraph(e) {
      e.preventDefault();
      const results = $('.ui.form').form('is valid');
      if (!results.includes(false)) {
        this.$store.commit('createGraph', this.graph);
      }
    },
    goBack() {
    },
  },
  mounted() {
    $('.ui.dropdown').dropdown();
    $('.ui.checkbox').checkbox();
  },
};
</script>

<style>

</style>
