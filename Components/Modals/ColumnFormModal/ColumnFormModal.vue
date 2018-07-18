<template>
  <modal-object>
    <template slot="header">
      Create/Edit a Column
    </template>
    <template slot="content">
      <column-form :formValues="formValues"></column-form>
    </template>
    <template slot="actions">
      <div class="ui approve button" @click="approve">Approve</div>
      <div class="ui cancel button">Cancel</div>
    </template>
  </modal-object>
</template>

<script>
/* global $ */
import ModalObject from '../ModalObject.vue';
import ColumnForm from '../../Forms/ColumnForm/ColumnForm.vue';

export default {
  name: 'ColumnFormModal',
  components: { ModalObject, ColumnForm },
  props: {
    formValues: {
      type: Object,
    },
  },
  methods: {
    approve() {
      const columnTitle = $('#columnForm-title').val();
      const columnType = $('#columnForm-type').val();
      const mode = this.formValues ? 'Edit' : 'Create';

      if (mode === 'Create') {
        this.$store.commit('JSQL/pushColumn', { name: columnTitle, type: columnType });
      }
    },
  },
};
</script>

<style>

</style>
