<template>
  <button>
    <span id="basic-button-text"><slot /></span>
  </button>
</template>

<script>

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
};
</script>

<style lang="scss" scoped>
  @import "@/sass/global";

$icon-margin: 0.9375rem;

button {
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: -0.625rem 0.625rem 0 $blue-tertiary;
  }

  display: flex;
  padding: 0.7813rem;
  font-family: $font-family-heading;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5rem;
  color: $red-primary;
  text-transform: uppercase;
  background: transparent;
  border: 0.1875rem solid #d11d66;
  border-radius: 0.3125rem;
  transition: box-shadow ease-in-out 400ms;
}

</style>
