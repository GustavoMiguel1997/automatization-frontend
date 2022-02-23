const path = require('path');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: __dirname + '/public',
    },
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    port: 5000,
  },
  devtool: 'source-map', // inline-source-map
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new DefinePlugin({
      'process.env': {
        REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
      },
    }),
    HTMLWebpackPluginConfig,
  ],
};
