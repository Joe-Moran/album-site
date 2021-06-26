// const path = require('path');

// const scss = {
//   test: /\.scss$/,
//   use: [
//     'vue-style-loader',
//     'style-loader',
//     'css-loader',
//     'sass-loader'
//   ],
// };

module.exports = {
  stories: ['../src/components/**/*.stories.@(js)', ],
  addons: ['@storybook/addon-essentials',  '@storybook/addon-postcss',],
  core: {
    builder: "webpack5",
  },

  // webpackFinal: async (config, {
  //   configType
  // }) => {

  //   config.module.rules.push(scss);

  //   return config;
  // },

};

