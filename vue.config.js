

module.exports = {
    devServer: {
        contentBase: './dist'
    },
     chainWebpack: config => {
        const path = require('path');
        config.resolve.alias.set("@", path.resolve(__dirname, 'src/'));
        config.resolve.extensions.add(".vue");
        config.resolve.extensions.add(".scss");
    }
}