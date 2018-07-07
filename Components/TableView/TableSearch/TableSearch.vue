<template>
  <div>
    <div class="ui form">
      <div class="field">
        <input @keyup="searchTable" type="text" placeholder="Search Table">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TableSearch',
  methods: {
    searchTable(e) {
      this.getTable.searchTable(e.target.value);
    },
  },
  computed: {
    ...mapGetters('JSQL', [
      'getTable',
    ]),
  },
};
</script>

<style>

</style>
