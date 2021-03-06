/*eslint-disable */
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var modules = {
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management'
        })
    ],
    mode:'development'
}

module.exports = modules;