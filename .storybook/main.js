

const path = require('path');

module.exports = {
  webpackFinal: (config) => ({ ...config, module: { ...config.module, rules: custom.module.rules } }),
};

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

    const rule = config.module.rules.find(
      (r) =>
        // it can be another rule with file loader
        // we should get only svg related
        r.test
        && r.test.toString().includes('svg')
        // file-loader might be resolved to js file path so "endsWith" is not reliable enough
        && r.loader
        && r.loader.includes('file-loader'),
    );

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
