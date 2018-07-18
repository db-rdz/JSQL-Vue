<template>
  <div style="display: inline;"
    v-if="canUseMainMenuItem">
    <a class="item" style="float: left;" @click="handleMainItemClick"
      :class="{ 'disabled': !isMainItemValid }">
      <i class="trash icon"></i>
    </a>
    <a @click="handleRemoveRow" :class="{ 'disabled' : !isRemoveRowSubItemValid }"
      v-if="canUseRemoveRowSubItem" class="item" style="float: left;">
      {{ removeRowButtonText }}
    </a>
    <a @click="handleRemoveColumn" v-if="canUseRemoveColumnSubItem"
      :class="{ 'disabled' : !isRemoveColumnSubItemValid }" class="item" style="float: left;">
      {{ removeColumnButtonText }}
    </a>
    <!-- <a @click="displayRowSelectionForRemoval" :class="{ 'disabled' : isRowListEmpty }"
      v-if="getTable.options.allowRowRemoving && isRemoveTabExpanded"
      class="red item" style="float: left;">
      Remove Selected
    </a> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'RemoveTab',
  props: {
    removeRowButtonText: {
      type: String,
      default: 'Row',
    },
    removeColumnButtonText: {
      type: String,
      default: 'Column',
    },
  },
  data() {
    return {
      isRemoveTabExpanded: false,
    };
  },
  methods: {
    ...mapMutations('JSQL', [
      'toggleShowRowSelectionBox',
      'toggleShowColumnSelectionBox',
      'setSelectHandler',
      'setSelectActionText',
      'removeMultipleRows',
      'removeRowsAndColumns',
    ]),
    handleMainItemClick() {
      if (this.isMainItemValid) {
        this.isRemoveTabExpanded = !this.isRemoveTabExpanded;
      }
    },
    handleRemoveRow() {
      if (this.isRemoveRowSubItemValid) {
        this.setSelectActionText('Remove Selected');
        this.setSelectHandler(this.removeRowsAndColumns);
        this.toggleShowRowSelectionBox();
      }
    },
    handleRemoveColumn() {
      if (this.isRemoveColumnSubItemValid) {
        this.setSelectActionText('Remove Selected');
        this.setSelectHandler(this.removeRowsAndColumns);
        this.toggleShowColumnSelectionBox();
      }
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getNumberofColumns',
      'getNumberofRows',
      'getSelectedRows',
      'getShowRowSelectionBox',
    ]),
    canUseMainMenuItem() {
      return this.getTable.options.allowRowRemoving || this.getTable.options.allowColumnRemoving;
    },
    canUseRemoveRowSubItem() {
      return this.getTable.options.allowRowRemoving && this.isRemoveTabExpanded;
    },
    canUseRemoveColumnSubItem() {
      return this.getTable.options.allowColumnRemoving && this.isRemoveTabExpanded;
    },
    isMainItemValid() {
      return this.isRemoveRowSubItemValid || this.isRemoveColumnSubItemValid;
    },
    isRemoveRowSubItemValid() {
      if (this.getNumberofRows === 0) {
        return false;
      }
      return true;
    },
    isRemoveColumnSubItemValid() {
      if (this.getNumberofColumns === 0) {
        return false;
      }
      return true;
    },
  },
  watch: {
    getNumberofRows() {
      if (this.getNumberofRows === 0 && this.getShowRowSelectionBox) {
        this.toggleShowRowSelectionBox();
      }
    },
  },
};
</script>

<style>

</style>
