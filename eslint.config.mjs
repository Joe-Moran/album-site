import aliasPlugin from '@dword-design/eslint-plugin-import-alias'
import js from '@eslint/js'
import skipFormattingConfig from '@vue/eslint-config-prettier/skip-formatting'
import { flatConfigs } from 'eslint-plugin-import-x'
import storybook from 'eslint-plugin-storybook'
import pluginVue from 'eslint-plugin-vue'
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'

export default [
  {
    ignores: ['node_modules', 'dist', 'storybook-static', '**/dist'],
  },
  {
    files: ['**/*.vue', '**/*.js', '**/*.jsx', '**/*.mjs'],
  },
  flatConfigs.recommended,
  aliasPlugin.configs.recommended,
  ...vuejsAccessibility.configs['flat/recommended'],
  ...pluginVue.configs['flat/recommended'],

  js.configs.recommended,

  ...storybook.configs['flat/recommended'],
  skipFormattingConfig,

  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.mjs', 'vite.config.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['.hygen.js', 'postcss.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  {
    files: ['**/*.test.js', '**/*.integration.js', 'vitest.setup.js'],
    languageOptions: {
      globals: globals.vitest,
    },
  },
  {
    rules: {
      'import-x/no-dynamic-require': 'warn',
      'import-x/first': ['error'],
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
      'import-x/no-unresolved': ['error', { ignore: ['vitest\\/config'] }],

      '@dword-design/import-alias/prefer-alias': [
        'error',
        {
          alias: {
            '@': './src',
          },
        },
      ],
      'no-console': ['warn'],

      'no-var': ['error'],
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          allowChildren: true,
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      '@/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['export'] },
      ],
      'no-unused-vars': 'error',
    },

    settings: {
      'import-x/resolver': {
        typescript: {
          project: 'jsconfig.json',
        },
        node: true,
      },
    },
  },
]
