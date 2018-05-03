<template>
  <div>
    <graph-form></graph-form>
    <graph-preview></graph-preview>
  </div>
</template>

<script>
import GraphForm from '../../Forms/GraphForm/GraphForm';
import GraphPreview from './GraphPreview/GraphPreview';

export default {
  name: 'GraphEditor',
  components: { GraphForm, GraphPreview },
};
</script>

<style>

</style>
