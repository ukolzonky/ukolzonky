var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  var config = {
    entry: {
      'app': './app.js'
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].min.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.json']
    },
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.join(__dirname, '/'),
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      ]
    }
  };

  return config;
}