<template>
  <button>
    <!-- <SVGIcon
      :icon="prependIcon"
      :height="$options.ICON_SQUARE_DIMENSION"
      :width="$options.ICON_SQUARE_DIMENSION"
      v-if="prependIcon"
      class="icon"
    /> -->
    <span id="basic-button-text"><slot></slot></span>
    <!-- <SVGIcon
      :icon="appendIcon"
      :height="$options.ICON_SQUARE_DIMENSION"
      :width="$options.ICON_SQUARE_DIMENSION"
      v-if="appendIcon"
      class="icon"
    /> -->
  </button>
</template>

<script>
/**
 * The value to use for the square dimensions of the container of the button icon.
 */
const ICON_SQUARE_DIMENSION = 32;

/**
 * A very basic button, styled specifically for this site.
 */
export default {
  name: "BasicButton",
  components: {},
  props: {
    /**
     * The path of the icon to prepend the button label text, if desired.
     */
    prependIcon: { type: String, required: false },

    /**
     * The path of the icon to append to the button label text, if desired.
     */
    appendIcon: { type: String, required: false },
  },
  ICON_SQUARE_DIMENSION,
};
</script>

<style lang="scss" scoped>
// @import "src/sass/_global.scss";
@import "xRGB-Site-DSP/dist/styledictionary/scss/variables.scss";

button {
  &:hover {
    cursor: pointer;
    box-shadow: -10px 10px 0px $blue-tertiary;
  }
  display: block;
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
  vertical-align: middle;
}
</style>