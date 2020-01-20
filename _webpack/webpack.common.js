const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  entry: {
    app: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My website',
      template: path.resolve(__dirname, '../_templates/client.html'),
    }),

      new CleanWebpackPlugin(),

      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, `../_dist/bundle.html`),
      }),
      new Visualizer({
        filename: './visualizer.html',
      }),

  ],
};