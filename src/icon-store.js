// const colors = require('../xRGB-Site-DSP/dist/styledictionary/properties/colors.json')
//   .color

// // const svgContext = require.context(
// //   '!svg-inline-loader?' +
// //     "removingTags=['style']" + // remove style tags, etc.
// //     '&removeSVGTagAttrs=true' + // enable removing attributes
// //     '&removingTagAttrs=fill' + // remove fill attributes
// //     '!./assets/icons', // search this directory
// //   true, // search subdirectories
// //   /\w+\.svg$/i // only include SVG files
// // )

// function getIconIds() {
//   return getFormattedIcons().map((icon) => icon.id)
// }

// function getIconContent() {
//   return getFormattedIcons().map((icon) => icon.content)
// }

// function getFormattedIcons() {
//   const symbols = svgContext.keys().map((path) => {
//     return getIconColors().map((color) => {
//       const id = path.replace(/^\.\/(.*)\.\w+$/, '$1') + '-' + color.name
//       return {
//         id: id,
//         // content: svgContext(path)
//         //   .replace('<svg', `<symbol id="${id}" `)
//         //   .replace('svg>', 'symbol>'),
//       }
//     })
//   })
//   return [].concat(...symbols) // flatten nested array
// }

// function getIconColors() {
//   const colorArray = []
//   for (const color in colors) {
//     colorArray.push({
//       name: color.toLowerCase().replace(' ', '-'),
//       value: colors[color].value,
//     })
//   }
//   return colorArray
// }
export default {
  // iconIds: getIconIds(),
  // icons: getIconContent(),
};
