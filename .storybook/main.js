const path = require('path')

const scss = {
  test: /\.scss$/,
  use: ['css-loader', 'sass-loader'],
}
const css = {
  test: /\.css$/,
  use: ['css-loader'],
}

// /**
//  *
//  * @param {object} config - The Webpack config
//  * @returns {object} the webpack rule for svg file loading
//  */
// function findSVG(config) {
//   return config.module.rules.find(
//     (r) =>
//       // it can be another rule with file loader
//       // we should get only svg related
//       r.test &&
//       r.test.toString().includes('svg') &&
//       // file-loader might be resolved to js file path so "endsWith" is not reliable enough
//       r.loader &&
//       r.loader.includes('file-loader')
//   )
// }

module.exports = {
  stories: ['../src/components/**/*.stories.@(js)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    // '@storybook/addon-a11y',
  ],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(scss)
    config.module.rules.push(css)

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '../src'),
    }

    // findSVG(
    //   config
    // ).test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['vue-svg-loader'],
    // })
    return config
  },
}
