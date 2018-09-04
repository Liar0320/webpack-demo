/*eslint-disable */
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');

var modules = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new cleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode:'development'
}

module.exports = modules;