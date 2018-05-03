<template>
  <div class="ui modal">
    <div class="header"><slot name="header"></slot></div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalObject',
};
</script>

<style>

</style>
