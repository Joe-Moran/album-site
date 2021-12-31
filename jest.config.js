module.exports = {
  projects: [
    {
      displayName: 'vue',
      preset: '@vue/cli-plugin-unit-jest',
      setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.js'],
      transformIgnorePatterns: ['/node_modules/(?!vuejs-loading-plugin)'],
      transform: {
        '.+\\.(webp)$': 'jest-transform-stub',
      },
      testMatch: [
        '**/tests/unit/**/*.spec.[jt]s?(x)',
        '**/__tests__/*.test.[jt]s?(x)',
        '**/__tests__/integration/**/*.integration.[jt]s?(x)',
      ],
      collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!**/node_modules/**',
        '!src/main.js',
        '!src/app.vue',
        '!src/.storybook',
        '!src/preview.js',
        '!src/api/**',
      ],
      coveragePathIgnorePatterns: [
        '.stories.js',
      ],
    },
    {
      displayName: 'e2e',
      preset: 'jest-puppeteer',
      moduleFileExtensions: [
        'js',
      ],
      transform: {
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
      },
      testMatch: ['**/?(*.)+(e2e).[tj]s?(x)'],
    },
  ],
};
