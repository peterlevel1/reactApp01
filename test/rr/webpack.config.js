var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    "babel-polyfill",
    path.join(__dirname, 'js/app.js')
  ],
  output: {
    publicPath: '/js/',
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    alias: {
      'appRoot': path.join(__dirname, 'dist/js'),
      'vendor': 'appRoot/vendor'
    },
    extensions: ['', '.js', '.json', '.jsx', '.less'],
  },
  resolveLoader: {},
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 version!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        // inline base64 URLs for <=8k images,
        // use direct URLs for the rest
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?presets[]=es2015,presets[]=react'
        ]
      }
      // -----------------------
      // {
      //   test: /\.js$/,
      //   loader: 'babel',
      //   exclude: /node_modules/,
      //   query: {
      //     presets: ['es2015', 'react']
      //   }
      // }
      // -----------------------
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
