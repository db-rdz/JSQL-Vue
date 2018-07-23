<template>
  <th  @dblclick="toggleColumnNameEditing">
    <div v-if="getShowColumnSelectionBox" class="ui fitted checkbox">
      <input @change="toggleColumnSelection" type="checkbox" tabindex="0" >
      <label></label>
    </div>
    <b>
      <editable-div
        @change="handleColumnNameEdit"
        :value="column.name"
      ></editable-div>
    </b>
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
