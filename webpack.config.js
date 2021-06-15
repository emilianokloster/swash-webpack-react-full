module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // devtool: false,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
    ],
  },

  devServer: {
    contentBase: "./dist",
  },
};
