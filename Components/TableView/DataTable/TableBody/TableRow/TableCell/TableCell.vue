  <template>
  <div class="ui form">
    <div class="field">
      <div @dblclick="toggleInputField" v-if="!showInputField">
        <span>{{value}}</span>
      </div>
      <div class="ui" :class="inputWrapperClass" v-if="showInputField">
        <input ref="inputField"
          @change="updateField"
          @blur="toggleInputField"
          :type="columnType" tabindex="0" class="hidden" :value="value">
        <label></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableCell',
  props: {
    columnType: {
      type: String,
    },
    value: {
      String,
    },
    columnName: {
      type: String,
    },
  },
  data() {
    return {
      showInputField: false,
    };
  },
  computed: {
    inputWrapperClass() {
      return '';
    },
    fieldTypeClass() {
      return 'text';
    },
  },
  methods: {
    toggleInputField() {
      this.showInputField = !this.showInputField;
    },
    updateField(event) {
      this.$emit('change', { columnName: this.columnName, value: event.target.value });
    },
  },
  updated() {
    if (this.showInputField) {
      this.$refs.inputField.focus();
    }
  },
};


</script>

<style>

</style>
