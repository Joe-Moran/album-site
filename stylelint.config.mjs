/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'color-named': 'never',
    'length-zero-no-unit': true,
    'scss/load-partial-extension': 'never',
    'scss/load-no-partial-leading-underscore': null,
    'value-keyword-case': ['lower', { ignoreFunctions: ['v-bind'] }],
    'declaration-property-unit-allowed-list': { 'line-height': [] },
    'declaration-property-value-no-unknown': null,
  },
  overrides: [
    {
      files: ['src/sass/_var.scss'],
      rules: {
        'color-no-hex': null,
        'color-hex-length': 'long',
      },
    },
  ],
}
