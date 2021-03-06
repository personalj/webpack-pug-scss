const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // publicPath: './' - для просмотра девсервером билд сборки
  // publicPath: '/' - для просмотра девсервером dev сборки
  output: {
    filename: `js/[name].min.js`,
    path: baseWebpackConfig.externals.paths.dist,
    publicPath: '/'
  },
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8080,
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
