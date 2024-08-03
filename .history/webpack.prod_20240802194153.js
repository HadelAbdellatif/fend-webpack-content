var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
const webpack = require("webpack")
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
    })]
}

