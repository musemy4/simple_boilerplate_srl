const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 외부 css 파일로 로드해옴

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.jpg$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'common.css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port : 8080
    }
}