<template>
  <button>
    <SVGIcon
      :icon="prependIcon"
      :height="$options.iconDimension"
      :width="$options.iconDimension"
      :color="prependColor"
      v-if="prependIcon"
      class="icon"
    />
    <span id="basic-button-text"><slot></slot></span>
    <SVGIcon
      :icon="appendIcon"
      :height="$options.iconDimension"
      :width="$options.iconDimension"
      :color="appendColor"
      v-if="appendIcon"
      class="icon"
    />
  </button>
</template>

<script>
import SVGIcon from "../icons/SVGIcon.vue";

export default {
  name: "BasicButton",
  components: {
    SVGIcon,
  },
  props: {
    prependIcon: { type: String, required: false },
    appendIcon: { type: String, required: false },
    prependColor: { type: String, required: false },
    appendColor: { type: String, required: false },
  },
  iconDimension: 32,
};
</script>

<style lang="scss" scoped>
@import "xRGB-Site-DSP/dist/styledictionary/scss/variables.scss";
$icon-margin: 15px;

button {
  &:hover {
    cursor: pointer;
    box-shadow: -10px 10px 0px $blue-tertiary;
  }
  display: flex;
  transition: box-shadow ease-in-out 400ms;
  border-radius: 5px;
  background: transparent;
  border: 3px solid #d11d66;
  color: #d11d66;
  padding: 14px;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Consolas;
  letter-spacing: 13px;
}

.icon {
  &:first-child {
    margin-right: $icon-margin;
  }

  &:last-child {
    margin-left: $icon-margin;
  }
}
</style>