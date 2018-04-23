<template>
    <div class="ui menu" id="#table-menu" stlye="height: 100%">
      <filter-manager-modal :filterManager="getTableFilterManager"></filter-manager-modal>
      <column-form-modal></column-form-modal>
      <div style="display: inline;">
          <component
            @action="menuAction"
            :is="adapter" v-for="(value, index) in data" :data="value" :key="index">
          </component>
      </div>
    </div>
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
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
    adapter: {
      type: String,
      default: 'ExpandableItem',
    },
  },
  data() {
    return {
      openedMenuItem: null,
    };
  },
  computed: {
    ...mapGetters([
      'getTableFilterManager',
    ]),
  },
  methods: {
    menuAction(args) {
      switch (args.mainItem) {
        case 'plus': {
          if (args.subItems[args.clickedItem] === 'Row') {
            this.$store.commit('pushRow');
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
