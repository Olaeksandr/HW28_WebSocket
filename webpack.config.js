const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve (__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
     },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};