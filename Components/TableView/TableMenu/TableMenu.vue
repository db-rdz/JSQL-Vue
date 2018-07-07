<template>
  <div class="ui menu" id="#table-menu" stlye="height: 100%">
    <filter-manager-modal :filterManager="getTableFilterManager"></filter-manager-modal>
    <column-form-modal></column-form-modal>
    <div style="display: inline;">
      <div style="display: inline;">
        <a class="item" style="float: left;">
          <i class="plus icon"></i>
        </a>
        <a class="item" style="float: left;">
          Row
        </a>
        <a class="item" style="float: left;">
          Column
        </a>
      </div>
      <div style="display: inline;">
        <a class="item" style="float: left;">
          <i class="trash icon"></i>
        </a>
        <a class="item" style="float: left;">
          Row
        </a>
        <a class="item" style="float: left;">
          Column
        </a>
      </div>
      <div style="display: inline;">
        <a class="item" style="float: left;">
          <i class="search icon"></i>
        </a>
        <a class="item" style="float: left;">
          Table
        </a>
        <a class="item" style="float: left;">
          Column
        </a>
      </div>
      <div style="display: inline;">
        <a class="item" style="float: left;">
          <i class="filter icon"></i>
        </a>
      </div>
    </div>
    <div class="ui right aligned category search item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" placeholder="Search Table">
        <i class="search link icon"></i>
      </div>
      <div class="results"></div>
    </div>
    <div style="display: inline;">
      <a class="item">
        <i class="chart bar icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
/* global $ */
import { mapGetters, mapMutations } from 'vuex';
import ColumnFormModal from '@/components/jsql-smarttable/Components/Modals/ColumnFormModal/ColumnFormModal';
import FilterManagerModal from '@/components/jsql-smarttable/Components/Modals/FilterManagerModal/FilterManagerModal';
import ExpandableItem from './Adapters/ExpandableItem/ExpandableItem';


// v-for="(key, item, index) in data" :key="index" :index="index"
export default {
  name: 'TableMenu',
  components: { ExpandableItem, ColumnFormModal, FilterManagerModal },
  props: {
    data: {
      required: false,
    },
    addRowButtonHandler: {
      type: Function,
    },
    removeRowButtonHandler: {
      type: Function,
    },
    addColumnButtonHandler: {
      type: Function,
    },
    removeColumnButtonHandler: {
      type: Function,
    },
    adapter: {
      type: String,
      default: 'ExpandableItem',
    },
  },
  data() {
    return {
      openedMenuItem: null,
      isAddTabExpanded: false,
      isRemoveTabExpanded: false,
      isSearchTabExpanded: false,
    };
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTableFilterManager',
    ]),
  },
  methods: {
    ...mapMutations('JSQL', [
      'pushRow',
    ]),
    menuAction(args) {
      switch (args.mainItem) {
        case 'plus': {
          if (args.subItems[args.clickedItem] === 'Row') {
            this.pushRow();
          } else if (args.subItems[args.clickedItem] === 'Column') {
            $('.modal').modal('show');
          }
          break;
        }
        case 'trash': {
          break;
        }
        case 'filter': {
          $('.filter-manager-modal').modal('show');
          break;
        }
        default: {
          break;
        }
      }
    },
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
};
</script>

<style>

</style>
