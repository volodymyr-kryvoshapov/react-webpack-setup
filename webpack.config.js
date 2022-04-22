const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[contenthash:base64:5]',
                auto: resourcePath => resourcePath.endsWith('.m.css'),
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') })],
  // resolve: {
  //   extensions: ['*', '.js', '.jsx'],
  // },
};
