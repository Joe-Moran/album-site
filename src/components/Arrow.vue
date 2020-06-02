<template>
  <svg id="arrow" width="50.405514" height="10.720881" viewBox="0 0 50.405514 10.72088">
    <g id="layer1" transform="translate(0.20025753,-11.399707)">
      <path
        style="fill:none;fill-opacity:1;stroke-width:4;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        :style="{stroke: color}"
        d="M 0.3251131,13.32947 25.002499,20.047794 49.679887,13.32947"
        id="arrow-path"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "Arrow",
  props: { color: String },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss">
@import "../sass/_global.scss";
#arrow-path {
  stroke: $red-primary;
}
</style>