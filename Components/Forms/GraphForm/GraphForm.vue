<template>
  <form class="ui form">
    <h4 class="ui dividing header">Graph Options</h4>

    <div class="three fields">
      <div class="field">
        <label>Graph Title</label>
        <div class="field">
          <input type="text" name="shipping[first-name]" placeholder="First Name">
        </div>
      </div>
    </div>

    <div class="three fields">
      <div class="field">
        <div class="ui toggle checkbox">
          <input type="checkbox" name="gift" tabindex="0" class="hidden">
          <label>Show Graph Legend</label>
        </div>
      </div>

      <div class="field">
        <div class="ui toggle checkbox">
          <input type="checkbox" name="gift" tabindex="0" class="hidden">
          <label>Show Graph Title</label>
        </div>
      </div>
    </div>

    <h4 class="ui dividing header">X-Axis</h4>
    <div class="three fields">
      <div class="field">
        <label>Choose a column as your x-axis:</label>
        <div class="ui selection dropdown">
            <input ref="target-column" type="hidden"
              name="filterColumn" >
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
            <input ref="target-column" type="hidden"
              name="filterColumn" >
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
            <div class="menu">
              <div class="item" data-value="value">
                  Value
              </div>
            </div>
        </div>
      </div>
    </div>

    <h4 class="ui dividing header">Y-Axis</h4>

    <div class="three fields">
      <div class="field">
        <label>Y-Axis Label</label>
        <div class="field">
          <input type="text" name="shipping[first-name]" placeholder="First Name">
        </div>
      </div>

      <div class="field">
        <label>Y-Axis Color</label>
        <div class="field">
          <input type="color" name="favcolor" value="#ff0000">
        </div>
      </div>
    </div>

    <div class="three fields">

      <div class="field">
        <label>Choose a column as your y-axis:</label>
        <div class="ui selection dropdown">
            <input ref="target-column" type="hidden"
              name="filterColumn" >
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
              name="filterColumn" >
            <i class="dropdown icon"></i>
            <div class="default text">Choose a column:</div>
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

  </form>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';

export default {
  name: 'GraphForm',
  computed: {
    ...mapGetters([
      'getXAxisColumn',
      'getColumnByIndex',
      'getRowData',
      'getNumberofColumns',
      'getFilterFunctions',
      'getColumnList',
    ]),
    ...mapGetters('GraphFormStore', [
      'getGraph',
    ]),
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
};
</script>

<style>

</style>
