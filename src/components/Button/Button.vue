<template>
  <button>
      <img :src=""
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    prependIcon: { type: String, required: false},
    appendIcon: { type: String, required: false },
    prependColor: {type: String, required: false},
    appendColor: {type: String, required: false}

  },
  computed: {
      prependIconSource() {
          return require(this.prependIcon);
      }
  }
};
</script>

<style lang="scss" scoped>
</style>