/*eslint-disable */
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin')
// const webpackDevServer = require('webpack-dev-server');

var modules = {
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new cleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        })
    ],
    mode:'development'
}

module.exports = modules;