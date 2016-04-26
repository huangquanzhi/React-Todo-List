'use strict'

var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      },
      { test: /\.csv?$/, loader: 'dsv-loader' }, //will load all .csv files with dsv-loader by default
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      ie: 'component-ie',
    },
  },
}
