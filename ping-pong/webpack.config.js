const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // minify/Uglification is the process of reducing our code to the bare minimum needed for a machine to read it

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map', //dev tool for Webpack Development Server - any time we make changes to our code, it's automatically rebundled and reloaded.
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }), //Webpack Development Server
    new UglifyJsPlugin(), //uglify
    new CleanWebpackPlugin(['dist']), //cleanup plugin
    new HtmlWebpackPlugin({ //webpack handls bundling our HTML and outputting it to dist.
      title: 'Ping Pong',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,  //ESLint should lint all JS files except for the files in our nodemodules_ directory because they are external JS libraries.
        loader: "eslint-loader"
        // test: /\.css$/,
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      }
    ]
  }
};
