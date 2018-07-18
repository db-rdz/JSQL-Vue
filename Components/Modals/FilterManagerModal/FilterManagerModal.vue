<template>
  <modal-object class="filter-manager-modal">
    <template slot="header">Filters</template>
    <template slot="content">
      <filter-manager :filterManager="filterManager"></filter-manager>
    </template>
    <template slot="actions">
      <div class="ui approve button">Close</div>
    </template>
  </modal-object>
</template>

<script>
import ModalObject from '../ModalObject.vue';
import FilterManager from '../../FilterManager/FilterManager.vue';

export default {
  name: 'FilterManagerModal',
  components: { ModalObject, FilterManager },
  props: {
    filterManager: {
      type: Object,
    },
  },
};
</script>

<style>

</style>
