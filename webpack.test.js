const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  entry: {
    allcomponents: "./src/examples/css/allcomponents.css",
    checkout: [
      "./src/examples/css/checkout.css",
      "./src/examples/js/checkout.js"
    ],
    dashboard: [
      "./src/examples/css/dashboard.css",
      "./src/examples/js/dashboard.js"
    ],
    album: "./src/examples/css/album.css",
    blog: "./src/examples/css/blog.css",
    carousel: "./src/examples/css/carousel.css",
    pricing: "./src/examples/css/pricing.css",
    product: "./src/examples/css/product.css",
    starter: "./src/examples/css/starter.css"
  },
  mode: "production",
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "examples")
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css"
    }),
    new CleanWebpackPlugin(),

    // Examples Folder
    // Generate allcomponents and examples with production attributes
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor", "allcomponents"],
      filename: "allcomponents.html",
      template: "./src/examples/allcomponents.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor", "album"],
      filename: "album.html",
      template: "./src/examples/album.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor"],
      filename: "blog.html",
      template: "./src/examples/blog.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor"],
      filename: "carousel.html",
      template: "./src/examples/carousel.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor", "checkout"],
      filename: "checkout.html",
      template: "./src/examples/checkout.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor"],
      filename: "dashboard.html",
      template: "./src/examples/dashboard.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor"],
      filename: "pricing.html",
      template: "./src/examples/pricing.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor"],
      filename: "product.html",
      template: "./src/examples/product.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ["main", "vendor"],
      filename: "stater.html",
      template: "./src/examples/starter.html",
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
