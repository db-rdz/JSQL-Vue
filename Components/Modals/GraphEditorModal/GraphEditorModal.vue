<template>
  <modal-object class="filter-modal">
    <graph-editor slot="content"></graph-editor>
    <template slot="actions">
      <div class="ui cancel button">Cancel</div>
    </template>
  </modal-object>
</template>

<script>
import ModalObject from '../ModalObject.vue';
import GraphEditor from '../../GraphView/GraphEditor/GraphEditor.vue';

export default {
  name: 'GraphEditorModal',
  components: { ModalObject, GraphEditor },
};
</script>

<style>

</style>
