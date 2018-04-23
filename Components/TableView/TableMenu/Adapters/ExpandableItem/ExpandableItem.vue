<template>
  <div style="display: inline;">
    <a :class="{'active': expanded}" class=" item" style="float: left;" @click="toggleMenu()">
      <i :class="mainItem + ' icon'"></i>
    </a>
    <a class="item" v-for="(subitem, index) in subItems" v-if="expanded"
    :key="index" style="float: left;" @click="menuClick(index)">
      {{ subitem }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'ExpandableItem',
  props: {
    data: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    mainItem() {
      return this.data.item;
    },
    subItems() {
      return this.data.subItems;
    },
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
    },
    menuClick(index) {
      this.$emit('action', { mainItem: this.mainItem, subItems: this.subItems, clickedItem: index });
    },
  },
};
</script>

<style>

</style>
