<template>
  <svg :color="color" :src="iconPath" />
</template>

<script>
export default {
  name: "SVGIcon",
  props: {
    iconPath: { type: String, required: true },
  },
};
</script>

<style>
</style>