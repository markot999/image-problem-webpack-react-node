const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),

  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].[contenthash:6].js',
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|pdf)$/,
        type: 'asset/inline',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'EGO COFFE',
      template: path.resolve(__dirname, '..', './src/template/template.html'),
      favicon: path.resolve(__dirname, '..', './images/favicon.ico'),
      filename: 'index.html',
    }),
  ],
}
