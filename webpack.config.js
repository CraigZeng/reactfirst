const path = require('path');
const webpack = require('webpack');
const globalDefinePlugin = new webpack.DefinePlugin({
    __TEST__: JSON.stringify(JSON.parse(process.env.BUILD_TEST || 'false')),
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || 'false')),
}); 
const globalCommonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: './app/App.jsx',
    output: {
        path: path.join(__dirname, 'app', 'build'),
        filename: 'bundle.js',
        publicPath: "/app/build/"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['babel']}
        ]
    },
    plugins: [globalDefinePlugin, globalCommonsPlugin]
};