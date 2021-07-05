module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/recommended',
    'prettier',
    'plugin:jest-dom/recommended',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
