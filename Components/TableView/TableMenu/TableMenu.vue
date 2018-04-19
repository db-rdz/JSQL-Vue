<template>
    <div class="ui menu">
        <div style="display: inline;">
            <a class="item" style="float: left;">
                <i class="plus icon"></i>
            </a>
            <a class="item" style="float: left;">
                Column
            </a>
            <a class="item" style="float: left;">
                Row
            </a>
        </div>
        <a class="item">
            <i class="trash icon"></i>
        </a>
        <a class="item">
            <i class="search icon"></i>
        </a>
        <a class="item active">
            <i class="filter icon"></i>
        </a>
    </div>
</template>

<script>

// v-for="(key, item, index) in data" :key="index" :index="index"
export default {
  name: 'TableMenu',
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      openedMenuItem: null,
    };
  },
};
</script>

<style>

</style>
