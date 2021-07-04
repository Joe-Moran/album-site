const path = require('path')

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
  stories: ['../src/components/**/*.stories.@(js)'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss'],
  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config, { configType }) => {
    //   config.module.rules.push(scss);

    //   return config;
    // },

    // findSVG(
    //   config
    // ).test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['vue-svg-loader'],
    // })

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '../src/'),
    }
    return config
  },
}
