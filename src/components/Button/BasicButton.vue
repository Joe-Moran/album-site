<template>
  <button>
    <!-- <SVGIcon
      :icon="prependIcon"
      :height="$options.ICON_SQUARE_DIMENSION"
      :width="$options.ICON_SQUARE_DIMENSION"
      v-if="prependIcon"
      class="icon"
    /> -->
    <span id="basic-button-text"><slot /></span>
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
const ICON_SQUARE_DIMENSION = 32

/**
 * A very basic button, styled specifically for this site.
 */
export default {
  name: 'BasicButton',
  components: {},
  props: {
    prependIcon: { type: String, default: '' },
    appendIcon: { type: String, default: '' },
    prependColor: { type: String, default: 'orange' },
    appendColor: { type: String, default: 'orange' },
  },
  iconDimension: 32,
}
</script>

<style lang="scss" scoped>
@import 'xRGB-Site-DSP/dist/styledictionary/scss/variables.scss';
$icon-margin: 15px;

button {
  &:hover {
    cursor: pointer;
    box-shadow: -10px 10px 0 $blue-tertiary;
  }

  display: flex;
  padding: 14px;
  font-family: Consolas;
  font-size: 25px;
  font-weight: bold;
  color: #d11d66;
  text-transform: uppercase;
  letter-spacing: 13px;
  background: transparent;
  border: 3px solid #d11d66;
  border-radius: 5px;
  transition: box-shadow ease-in-out 400ms;
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
