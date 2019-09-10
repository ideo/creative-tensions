const webpack = require('webpack')
var config = require('./webpack.base.config.js')
config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': '"development"'
        }
    })
])
module.exports = config
