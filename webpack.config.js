const path = require("path");
module.exports = {
  mode: "development",
  //devtool: "none", //remove comment for more simplify the webpack code for dev
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
