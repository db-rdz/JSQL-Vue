<template>
  <div class="ui form">
      <div class="field">
        <div :class="{'checkbox': isCheckbox }">
          <label v-if="label">{{label}}</label>
          <input @change="update" :type="type" :value="value">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {
    update(event) {
      this.value = event.target.value;
    },
  },
  computed: {
    isCheckbox() {
      return this.type === 'checkbox';
    },
  },
};
</script>

<style>

</style>
