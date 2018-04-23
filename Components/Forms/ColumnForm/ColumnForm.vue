<template>
  <div class="ui form">
    <div class="three fields">
      <div class="field">
        <label>Column Title</label>
        <input id="columnForm-title" type="text" placeholder="Column Title" :value="columnTitle">
      </div>
    </div>

    <div class="field">
        <label>Column Type</label>
        <div class="ui selection dropdown">
            <input id="columnForm-type" type="hidden" name="type" :value="columnType">
            <i class="dropdown icon"></i>
            <div class="default text">Column Type</div>
            <div class="menu">
                <div class="item" data-value="String">Text</div>
                <div class="item" data-value="Date">Date</div>
                <div class="item" data-value="Number">Number</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnForm',
  props: {
    formValues: {
      type: Object,
    },
  },
  computed: {
    columnTitle() {
      if (this.formValues) {
        return this.formValues.columnTitle;
      }
      return '';
    },
    columnType() {
      if (this.formValues) {
        return this.formValues.columnType;
      }
      return '';
    },
  },
};
</script>

<style>

</style>
