/*eslint-disable */
var path = require('path');

var modules = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'development'
}

module.exports = modules;