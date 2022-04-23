const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve('dist'),
    },
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve('src', 'index.html'),
  })],
};
