<template>
  <svg
    id="arrow"
    width="50.405514"
    height="10.720881"
    viewBox="0 0 50.405514 10.72088"
    :class="{ up: up }"
  >
    <g id="layer1" transform="translate(0.20025753,-11.399707)">
      <path
        id="arrow-path"
        style="
          fill: none;
          fill-opacity: 1;
          stroke-dasharray: none;
          stroke-miterlimit: 4;
          stroke-opacity: 1;
          stroke-width: 4;
        "
        :style="{ stroke: color }"
        d="M 0.3251131,13.32947 25.002499,20.047794 49.679887,13.32947"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    color: { type: String, required: true },
    up: { type: Boolean, default: false },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss">
@import '../sass/_global.scss';
#arrow-path {
  stroke: $red-primary;
}

.up#arrow {
  transform: scaleY(-1);
}
</style>
