<template>
  <th  @dblclick="toggleColumnNameEditing">
    <div v-if="getShowColumnSelectionBox" class="ui fitted checkbox">
      <input @change="toggleColumnSelection" type="checkbox" tabindex="0" class="hidden">
      <label></label>
    </div>
    <editable-div
      @change="handleColumnNameEdit"
      :value="column.name"
    ></editable-div>
  </th>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import EditableDiv from '../../../Forms/EditableDiv/EditableDiv.vue';

export default {
  name: 'TableColumn',
  components: { EditableDiv },
  props: {
    column: {
      type: Object,
    },
  },
  data() {
    return {
      editingColumnName: false,
    };
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getColumnByIndex',
      'getNumberofColumns',
      'getShowColumnSearch',
      'getShowColumnSelectionBox',
      'getShowRowSelectionBox',

      'getSelectedRows',
      'getSelectedColumns',
      'getSelectActionText',
      'getSelectHandler',
      'getTableHandlers',
      // ...
    ]),
  },
  methods: {
    ...mapMutations('JSQL', [
      'removeRowsAndColumns',
      'setSelectedColumns',
      'setSelectedRows',
      'editColumnName',
    ]),
    toggleColumnSelection() {
      const foundAtIndex = this.getSelectedColumns.indexOf(this.column.index);
      // If column index is found to be in the selected columna array then...
      if (foundAtIndex !== -1) {
        // Delete that index from the selected columna array.
        this.getSelectedColumns.splice(this.column.index, 1);
      } else {
        // If not then you need to add it to the selected columna array.
        this.getSelectedColumns.push(this.column.index);
      }
    },
    toggleColumnNameEditing() {
      this.editingColumnName = !this.editingColumnName;
    },
    handleColumnNameEdit(newColumnName) {
      if (this.getTableHandlers.editColumnNameHandler) {
        this.getTableHandlers.editColumnNameHandler(this.column.name, newColumnName);
      } else {
        this.editColumnName({ oldColumnName: this.column.name, newColumnName });
      }
    },
  },
};
</script>

<style>

</style>
