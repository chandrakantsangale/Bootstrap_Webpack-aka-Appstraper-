const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/site/index.html"
    })
    // , // uncomment this code to add next html to development
    // new HtmlWebpackPlugin({
    //   filename: "page_name.html",
    //   template: "src/page_name.html"
    // })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3.insert styles into dom
          "css-loader", //2.convert css to common js
          "sass-loader" //1.convert sass to css
        ]
      }
    ]
  }
});
