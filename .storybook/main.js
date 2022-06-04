const path = require('path');


module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
    },
    '@storybook/preset-scss',
  ],
  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config, { configType }) => {


    config.module.rules.push({
      test: /\.svg$/,
      use: ['vue-svg-loader'],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '../src/'),
    };
    return config;
  },
};
