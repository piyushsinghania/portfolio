const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: '90-95'
        }
      })
    ]
  }
}