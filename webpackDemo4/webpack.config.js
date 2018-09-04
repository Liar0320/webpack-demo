/*eslint-disable */
var path = require('path');

var modules = {
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
   
    mode:'development'
}

module.exports = modules;