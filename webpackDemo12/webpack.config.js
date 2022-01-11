/*eslint-disable */
var path = require("path");
var modules = {
  entry:"./src/index.js",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.css$/, use: "css-loader" }],
  },
  mode: "production",
  optimization: {
    usedExports: true,
  },
};

module.exports = modules;
