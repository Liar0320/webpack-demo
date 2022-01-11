const path = require("path");

module.exports = {
  entry: {
    src: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      // minSize: 100,
      automaticNameDelimiter: '~',
      name:false,
      cacheGroups: {
        commossans: {
          filename: '[name].bundle.js',
          test: /[\\/]node_modules[\\/]react/,
          name: 'reactFamily',
          chunks: 'all'
        },
        // vendor: {
        //   test: /[\\/]node_modules[\\/](react)[\\/]/,
        //   name: 'vendor',
        //   chunks: 'all',
        // }
        // vendors: {
        //   enforce: true
        // }
        // vendor: {
        //   test: /[\\/]node_modules[\\/](lodash)[\\/]/,
        //   name: 'vendor',
        //   chunks: 'all',
        // },
        // vendor: {
        //   test: /[\\/]node_modules[\\/](react)[\\/]/,
        //   // test(module, chunks) {
        //   //   console.log(chunks)
        //   //   //...
        //   //   return true;
        //   // },
        //   name: 'vendor',
        //   chunks: 'all',
        // },
      }
    },
  },
};
