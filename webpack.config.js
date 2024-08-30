const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  externals: {
    "express": {commonjs: "express"}
  },
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": false, //if you want to use this module also don't forget npm i crypto-browserify 
      "timers": false,
      "querystring": false,
    },
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      'react-dom': path.resolve(__dirname, "node_modules/react-dom"),
      'react-router-dom': path.resolve(__dirname, "node_modules/react-router-dom")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  
};