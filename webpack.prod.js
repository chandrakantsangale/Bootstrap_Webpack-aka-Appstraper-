const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  entry: {
    app: ["./src/site/css/app.css", "./src/site/js/app.js"]
  },
  mode: "production",
  //devtool: "none", // uncomment code for more simplify the webpack code for development only
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/site/index.html",
      chunks: ["main", "app"],
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
    // for next page add code here
    // ,
    // new HtmlWebpackPlugin({
    //   template: "src/site/starter.html",
    //   chunks: ["main", "starter"],
    //   minify: {
    //     removeAttributeQuotes: true,
    //     collapseWhitespace: true,
    //     removeComments: true
    //   }
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, //3.insert css styles into .css file
          "css-loader", //2.convert css to common js
          "sass-loader" //1.convert sass to css
        ]
      }
    ]
  }
});
