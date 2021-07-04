module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transformIgnorePatterns: ["/node_modules/(?!vuejs-loading-plugin)"],
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
    "!src/main.js",
    "!src/app.vue",
    "!src/.storybook",
    "!src/preview.js",
    "!src/api/**",
  ],
  coveragePathIgnorePatterns: [".stories.js"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  globals: {
    "vue-jest": {
      // Compilation errors in the <style> tags of Vue components will
      // already result in failing builds, so compiling CSS during unit
      // tests doesn't protect us from anything. It only complicates
      // and slows down our unit tests.
      experimentalCSSCompile: false,
    },
  },
};
