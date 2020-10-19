<template>
  <svg class="icon">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: "SVGIcon",
  props: {
    icon: { type: String, required: true },
    color: { type: String, required: false, default: "white" },
  },
};
</script>

<style>
</style>