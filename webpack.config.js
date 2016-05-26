const path = require('path');
const webpack = require('webpack');
const globalDefinePlugin = new webpack.DefinePlugin({
  __TEST__: JSON.stringify(JSON.parse(process.env.BUILD_TEST || 'false')),
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || 'false')),
});
// remove commmon and use vender to split commmon js
const globalCommonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');

const config = {
  entry: {
    main: ['./app/App.jsx'],
    dev: ['webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server'],
    vendor: [
      'react',
      'react-router',
      'redux',
      'react-dom',
    ],
  },
  devServer: {
    contentBase: './app/build',

    // Enable history API fallback so HTML5 History API based
    // routing works. This is a good default that will come
    // in handy in more complicated setups.
    historyApiFallback: true,
    hot: false,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    //
    // If you use Vagrant or Cloud9, set
    // host: process.env.HOST || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices unlike default
    // localhost
    host: process.env.HOST,
    port: 8080,
  },
  output: {
    path: path.join(__dirname, 'app', 'build'),
    filename: 'bundle.js',
    publicPath: '/app/build/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
    }],
  },
  plugins: [
    globalDefinePlugin,
    new webpack.HotModuleReplacementPlugin(),
    globalCommonsPlugin,
    new webpack.NoErrorsPlugin(),
  ],
};

module.exports = exports = config;
