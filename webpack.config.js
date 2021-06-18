const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // devtool: false,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 
          "css-loader",
          "postcss-loader", 
          "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  devServer: {
    contentBase: "./dist",
    hot: true
  },
};
