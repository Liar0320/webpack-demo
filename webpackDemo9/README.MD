express webpack-dev-middleware
用 express 和 webpack-dev-middleware 搭建简单服务器
https://webpack.js.org/guides/development/#using-webpack-dev-middleware

output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/'
},
//configuration file as base
publicPath 关于 这个路径 猜想 相对于 path而言

