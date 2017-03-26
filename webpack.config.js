/**
 * Created by youngjae on 2017. 3. 25..
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        bundle: ['react-hot-loader/patch',
                'webpack-dev-server/client?http://0.0.0.0:3000',
                'webpack/hot/only-dev-server',
                path.join(__dirname + '/src/main/resources/static/index.js')]
    },

    output: {
        path: path.join(__dirname + '/src/main/resources/static/build'),
        filename: '[name].js'
    },

    devServer: {
        contentBase: path.join(__dirname + '/src/main/resources/static'),
        port: 3000,
        host: "0.0.0.0",
        proxy: {
            "**": "http://localhost:8080"
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['react-hot-loader/babel']
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin() //prints more readable module names in the browser console on HMR updates
    ]
};