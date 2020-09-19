<template>
  <SVG-Icon :color="color" :icon-path="path" v-if="type === 'SVG'" />
  <!-- TODO: img icon -->
  <!-- TODO html icon -->
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: false,
      default: "SVG",
      validator: (value) => {
        return ["SVG", "img", "html"].indexOf(value) > -1;
      },
    },
    path: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "white",
    },
  },
};
</script>

<style>
</style>