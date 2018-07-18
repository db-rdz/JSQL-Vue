<template>
  <div class="ui icon menu">
    <graph-editor-modal ref="graphEditorModal"></graph-editor-modal>

    <a class="item" @click="expandModal">
      <i class="plus icon"></i>
    </a>

    <div class="ui right aligned category search item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" placeholder="Search graphs...">
        <i class="search link icon"></i>
      </div>
      <div class="results"></div>
    </div>
    <div style="display: inline;">
      <a class="item">
        <i class="table icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
/* global $ */
import GraphEditorModal from '../../Modals/GraphEditorModal/GraphEditorModal.vue';

export default {
  name: 'GraphViewMenu',
  components: { GraphEditorModal },
  methods: {
    expandModal() {
      $(this.$refs.graphEditorModal.$el).modal('show');
    },
  },
};
</script>

<style>

</style>
