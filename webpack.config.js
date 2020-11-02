const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            exclude: /node_modules/
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {

        filename: 'index.js',
        path: path.resolve(__dirname, 'bin')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.css']
    },
    externals: {
      fs: 'require("fs")',
      path: 'require("path")'
    }
};
