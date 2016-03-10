'use strict';

var webpack = require('webpack')

var config = {
    entry: [
        './src/pareto.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "pareto.min.js",
        library: 'paretojs',
        libraryTarget: 'commonjs'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })
    ]
};

module.exports = config;
