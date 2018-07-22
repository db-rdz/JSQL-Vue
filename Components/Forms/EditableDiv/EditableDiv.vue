<template>
  <div class="ui input">
    <span v-if="!editing" @dblclick="toggleEdit" >{{ value }}</span>
    <input @change="handleChange" @blur="toggleEdit" v-if="editing" :type="type" :value="value" />
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'EditableDiv',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
    },
    allowEdit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    toggleEdit() {
      if (this.allowEdit) {
        this.editing = !this.editing;
      }
    },
    focusInput() {
      if (this.editing) {
        $(this.$el).find('input').focus();
      }
    },
    handleChange(e) {
      const value = e.target.value;
      this.$emit('change', value);
    },
  },
  updated() {
    this.focusInput();
  },
  mounted() {
    this.focusInput();
  },
};
</script>

<style>

</style>
