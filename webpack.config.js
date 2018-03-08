"use strict";

const path = require('path');

module.exports = {
    entry: ["./ui/index.js"],
    output: {
        path:path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
}