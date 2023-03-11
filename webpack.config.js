const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tic-Tac-Toe Output',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',  // create style nodes from js strings
                    'css-loader',  // translates css into commonJS
                    'sass-loader',  //compiles sass to css   
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single', // used to avoid code splitting issues by the web server
    },

}