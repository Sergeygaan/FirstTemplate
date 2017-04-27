/**
 * Created by Sergey on 21.04.2017.
 *
 * webpack --watch --progress
 */

const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./main"),
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclue: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader'})
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!stylus-loader'})
                //test: /\.styl$/,
                //loader: 'style!css!autoprefixer?browsers=last 2 version!styles'
            },
            {
                test: /\.(pug|jade)$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|svg')$/,
                loader: 'file',
                exclude: '/node_modules/'
            }
            

        ]
    },
    plugins: [

        new ExtractTextPlugin("./css/MainStyles.css"),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./index.jade",
            pretty: false
        }),
    ]
    
}