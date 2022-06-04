<template>
  <a target="_blank">
    <span id="basic-button-text"><slot /></span>
  </a>
</template>

<script>

/**
 * A link that looks like a button, but slightly different?
 */
export default {
  name: 'ButtonLink',
  components: {},

  iconDimension: 32,
};
</script>

<style lang="scss" scoped>
@import "@/sass/global";

$icon-margin: 0.9375rem;

a {
  &:hover,
  &:focus {
    text-decoration-thickness: 2px;
    cursor: pointer;
    box-shadow: -0.625rem 0.625rem 0 $blue-tertiary;
  }

  display: flex;
  justify-content: center;
  padding: 0.7813rem;
  font-family: $font-family-heading;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5rem;
  color: $red-primary;
  text-decoration: underline;
  text-decoration-thickness: 0;
  text-transform: uppercase;
  background: transparent;
  border: 0.1875rem solid #d11d66;
  border-radius: 0.3125rem;
  transition: box-shadow ease-in-out 400ms;
}

</style>
