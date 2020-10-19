module.exports = {
    devServer: {
        contentBase: './dist'
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
              @import "src/sass/_global.scss";
            `
            }
        }
    }
}