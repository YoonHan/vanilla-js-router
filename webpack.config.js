const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)|(dist)/,
            loader: 'babel-loader'
        }]
    }
}