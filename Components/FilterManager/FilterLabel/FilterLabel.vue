<template>
  <a class="ui label">
    {{ filter.tag }}
    <i class="delete icon"></i>
  </a>
</template>

<script>
export default {
  name: 'FilterLabel',
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
