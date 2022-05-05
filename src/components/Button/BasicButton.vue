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
@import '@/sass/global.scss';

$icon-margin: .9375rem;

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

</style>
