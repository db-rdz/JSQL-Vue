<template>
  <modal-object class="filter-modal">
    <template slot="header">
      Create/Edit a Filter
    </template>
    <template slot="content">
      <filter-form :formValues="formValues"></filter-form>
    </template>
    <template slot="actions">
      <div class="ui approve button" @click="approve">Approve</div>
      <div class="ui cancel button">Cancel</div>
    </template>
  </modal-object>
</template>

<script>
import ModalObject from '../ModalObject.vue';
import FilterForm from '../../Forms/FilterForm/FilterForm.vue';

export default {
  name: 'FilterFormModal',
  components: { ModalObject, FilterForm },
  props: {
    formValues: {
      type: Object,
    },
  },
  methods: {
    approve() {
    },
  },
};
</script>

<style>

</style>
