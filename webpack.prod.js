const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
    // Generates default index.html
    new HtmlWebpackPlugin({}),
    // Also generate a template.html
    new HtmlWebpackPlugin({
      filename: "template.html",
      template: "src/template.html"
    }),
    // Also generate a template2.html with production attributes
    new HtmlWebpackPlugin({
      filename: "template2.html",

      template: "./src/template2.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3.insert css styles into .css file
          "css-loader", //2.convert css to common js
          "sass-loader" //1.convert sass to css
        ]
      }
    ]
  }
});
