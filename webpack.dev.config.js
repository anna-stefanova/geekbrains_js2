const { merge } = require('webpack-merge');
const base = require('./webpack.config');

module.exports = merge(base, {
    devServer: {
        publicPath: './js',
        contentBase: './public',
        port: 8080,
        host: 'localhost',
        hot: true,
    }
})