const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + ' /dist',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: __dirname + '/dist',
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
    ],
  },
};
