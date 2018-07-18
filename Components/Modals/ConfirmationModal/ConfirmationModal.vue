<template>
  <modal-object>
    <slot name="header" slot="header"></slot>
    <slot name="content" slot="content"></slot>
    <div slot="actions">
      <button @click="confirmButtonHandler" class="ui secondary button">
        Okay
      </button>
    </div>
  </modal-object>
</template>

<script>
import ModalObject from '../ModalObject';
export default {
  name: 'Confirmation Modal',
  components: { ModalObject },
  methods: {
    confirmButtonHandler(e) {
      e.preventDefault();
      this.$emit('confirm');
    },
  },
};
</script>

<style>

</style>
