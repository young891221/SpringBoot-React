/**
 * Created by youngjae on 2017. 3. 25..
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: path.join(__dirname + '/src/main/resources/static/index.js')
    },

    output: {
        path: path.join(__dirname + '/src/main/resources/static/build'),
        filename: '[name].js'
    },

    devServer: {
        port: 3000,
        contentBase: path.join(__dirname + '/src/main/resources/static'),
        proxy: {
            "**": "http://localhost:8080"
        }
    },

    module:
        {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }
            ]
        }
};