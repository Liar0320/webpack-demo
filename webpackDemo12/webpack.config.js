/*eslint-disable */
var path = require('path');
var modules = {
    entry:{
        app:'./src/index.js'
    },
    devtool: 'source-map',
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    mode:'development'
}

module.exports = modules;