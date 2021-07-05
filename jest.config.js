module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/app.vue',
    '!src/.storybook',
    '!src/preview.js',
    '!src/api/**',
  ],
  coveragePathIgnorePatterns: ['.stories.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@storybook/.*\\.vue$))'],
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
  globals: {
    'vue-jest': {
      // Compilation errors in the <style> tags of Vue components will
      // already result in failing builds, so compiling CSS during unit
      // tests doesn't protect us from anything. It only complicates
      // and slows down our unit tests.
      experimentalCSSCompile: false,
    },
  },
}
