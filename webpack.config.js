var webpack = require('webpack');

module.exports = {
  entry: './src/entry',
  output: {
    path: __dirname + '/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
      _: 'lodash',
      moment: 'moment'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', 
        query: { type: 'es6', template: 'jade' } }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: '.',
    publicPath: '/js/'
  }
};