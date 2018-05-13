<template>
  <div>
    <graph-form @graphChange="updatePreview"></graph-form>
    <graph-preview :graph="graph"></graph-preview>
  </div>
</template>

<script>
import GraphForm from '../../Forms/GraphForm/GraphForm';
import GraphPreview from './GraphPreview/GraphPreview';

export default {
  name: 'GraphEditor',
  components: { GraphForm, GraphPreview },
  data() {
    const graphManager = this.$store.getters.getGraphManager;
    return { graphManager, graphPreviewIndex: -1 };
  },
  methods: {
    updatePreview(graphOptions) {
      if (this.graphPreviewIndex === -1) {
        this.graphPreviewIndex = this.graphManager.createGraph(graphOptions);
      }
      this.graphManager.updateGraph(this.graphPreviewIndex, graphOptions);
    },
  },
  computed: {
    graph() {
      if (this.graphPreviewIndex !== -1) {
        return this.graphManager.getGraph(this.graphPreviewIndex);
      }
      return null;
    },
  },
};
</script>

<style>

</style>
