const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js', ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],

  webpackFinal: async (config, {
    configType
  }) => {

    config.module.rules.push({
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },

};