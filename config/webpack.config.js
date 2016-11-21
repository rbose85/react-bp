const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.BABEL_ENV = process.env.npm_lifecycle_event;

if (!TARGET) {
  const message = 'Unknown value for environment variable, npm_lifecycle_event.';
  throw new Error(`\n\n${message}\n\n`)
}

const SRC_PATH = path.resolve(__dirname, '../');

module.exports = {
  context: SRC_PATH,
  entry: path.resolve(SRC_PATH, 'src', 'index.js'),
  output: {
    path: path.resolve(SRC_PATH, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      clientLogLevel: 'info',
      template: require('html-webpack-template'),
      title: 'Split Webpack 2',
      appMountId: 'app',
      inject: false
    })
  ],
  devServer: {
    inline: true,
    contentBase: path.resolve(SRC_PATH, 'src')
  },
  devtool: 'source-map'
};
