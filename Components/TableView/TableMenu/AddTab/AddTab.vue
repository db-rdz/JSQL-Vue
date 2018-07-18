<template>
  <div style="display: inline;" v-if="canUseMainMenuItem">
    <column-form-modal id="add-column-modal"></column-form-modal>
    <a  @click="() => { isAddTabExpanded = !isAddTabExpanded }" class="item" style="float: left;">
      <i class="plus icon"></i>
    </a>
    <a @click="getRowButtonHandler()" v-if="canUseAddRowSubItem"
      :class="{ 'disabled' : !isAddRowSubItemValid }" class="item" style="float: left;">
      {{ addRowButtonText }}
    </a>
    <a @click="getColumnButtonHandler" v-if="canUseAddColumnSubItem"
      class="item" style="float: left;">
      {{ addColumnButtonText }}
    </a>
  </div>
</template>

<script>
/* global $ */
import { mapGetters, mapMutations } from 'vuex';
import ColumnFormModal from '../../../../Components/Modals/ColumnFormModal/ColumnFormModal.vue';

export default {
  name: 'AddTab',
  components: { ColumnFormModal },
  props: {
    addRowButtonText: {
      type: String,
      default: 'Row',
    },
    addColumnButtonText: {
      type: String,
      default: 'Column',
    },
  },
  data() {
    return {
      isAddTabExpanded: false,
    };
  },
  methods: {
    ...mapMutations('JSQL', [
      'pushRow',
    ]),
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
      'getNumberofColumns',
    ]),
    canUseMainMenuItem() {
      return this.getTable.options.allowRowAdding || this.getTable.options.allowColumnAdding;
    },
    canUseAddRowSubItem() {
      return this.getTable.options.allowColumnAdding && this.isAddTabExpanded;
    },
    canUseAddColumnSubItem() {
      return this.getTable.options.allowRowAdding && this.isAddTabExpanded;
    },
    isAddRowSubItemValid() {
      if (this.getNumberofColumns === 0) {
        return false;
      }
      return true;
    },
    getRowButtonHandler() {
      if (this.addRowButtonHandler !== undefined) {
        return this.addRowButtonHandler;
      }
      return this.pushRow;
    },
    getColumnButtonHandler() {
      if (this.addColumnButtonHandler !== undefined) {
        return this.addColumnButtonHandler();
      }
      return () => { $('#add-column-modal').modal('show'); };
    },
  },
};
</script>

<style>

</style>
