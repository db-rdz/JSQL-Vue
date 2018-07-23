<template>
  <div class="ui form">
    <div class="field">
      <editable-div @change="updateField" :value="value" :type="columnType"></editable-div>
    </div>
  </div>
</template>

<script>
import EditableDiv from '../../../../../Forms/EditableDiv/EditableDiv.vue';

export default {
  name: 'TableCell',
  components: { EditableDiv },
  props: {
    columnType: {
      type: String,
    },
    value: {
      String,
    },
    columnName: {
      type: String,
    },
  },
  computed: {
    inputWrapperClass() {
      return '';
    },
    fieldTypeClass() {
      return 'text';
    },
  },
  methods: {
    updateField(value) {
      this.$emit('change', { columnName: this.columnName, value });
    },
  },
  updated() {
    if (this.showInputField) {
      this.$refs.inputField.focus();
    }
  },
};


</script>

<style>

</style>
