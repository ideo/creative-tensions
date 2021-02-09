const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'source'),
    app_js: path.join(__dirname, 'source', 'js'),
    app_scss: path.join(__dirname, 'source', 'scss'),
    build: path.join(__dirname, 'public')
};

module.exports = {
    devtool: 'source-map',
    entry: {
        app: PATHS.app + '/js/index.js'
    },
    output: {
        path: PATHS.build,
        filename: 'js/index.js'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname + '/source/js',
                query: {
                    presets: ['es2016', 'react']
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
                include: PATHS.app_scss
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/main.css'),
    ]
};


