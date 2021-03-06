<template>
  <svg class="icon" :height="height" :width="width">
    <use :xlink:href="`#${icon}`" ref="use" />
  </svg>
</template>

<script>
import iconStore from "../../icon-store";
export default {
  name: "SVGIcon",
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value) => iconStore.iconIds.includes(value),
    },
    color: { type: String, required: false, default: "white" },
    width: { type: Number, default: 16 },
    height: { type: Number, default: 16 },
  },
  computed: {},
  mounted() {
    console.log(this.$refs.use);
  },
};
</script>

<style>
</style>