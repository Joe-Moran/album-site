module.exports = {
    devServer: {
        contentBase: './dist'
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
              @import "src/sass/_global.scss";
            `
            }
        }
    }
}