function getIconFileNames() {
    let context = require.context(
        "./assets/icons", // search this directory
        true, // search subdirectories
        /\w+\.svg$/i // only include SVG files
      );
      return context.keys().map((iconFile) => {
        return iconFile.replace(/^\.\/(.*)\.\w+$/, "$1");
      });
}

export default {
    iconFileNames: getIconFileNames()
}