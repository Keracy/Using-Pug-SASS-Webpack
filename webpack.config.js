const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry:{
        app: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: '/dist'
    },
    devServer: {
        overlay: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.pug'),
        }), 
    ],
    module: {
        rules: [{
            test: /\.js&/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.s[ac]ss/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        },
    ]
    }
}