const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var config = require('./webpack.base.config.js')

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': '"production"'
      }
  }),

  // keeps hashes consistent between compilations
  new webpack.optimize.OccurrenceOrderPlugin(),

  // minifies your code
  new UglifyJsPlugin()
])

module.exports = config
