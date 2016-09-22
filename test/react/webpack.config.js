var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    path.join(__dirname, 'src/js/app.js')
  ],
  output: {
    publicPath: '/js/',
    path: path.join(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    alias: {}
  },
  resolveLoader: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
