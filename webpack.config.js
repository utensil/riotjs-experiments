var webpack = require('webpack');

var jsDistPath = '/dist/js/';

module.exports = {
  entry: './src/client/entry',
  output: {
    libraryTarget: "var",
    path: __dirname + jsDistPath,
    filename: 'app-bundle.js'
  },
  target: 'web',
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      _: 'lodash',
      moment: 'moment',
      RiotControl: 'riotcontrol'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.jade\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader',
        query: { type: 'es6', template: 'jade' } },
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader',
        query: { type: 'es6'} }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
    ]
  },
  devServer: {
    contentBase: __dirname,
    publicPath: jsDistPath
  }
};
