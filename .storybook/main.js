const path = require('path');

const scss = {
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader'
  ],
};

module.exports = {
  stories: ['../src/components/**/*.stories.@(js)', ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-viewport/register'],

  webpackFinal: async (config, {
    configType
  }) => {

    config.module.rules.push(scss);

    return config;
  },

};