const fs = require('fs');
const path = require('path');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 拷贝静态文件
// 递归获取目录下所有.js文件作为入口
function getEntries(dir) {
    let entries = {};

    function readDir(dir) {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.resolve(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                readDir(filePath);
            } else if (stat.isFile() && path.extname(filePath) === '.js') {
                const relativePath = path.relative('./src', filePath);
                const entryName = path.dirname(relativePath);
                entries[entryName] = filePath;
            }
        });
    }

    readDir(dir);

    return entries;
}
module.exports = {
    ...defaultConfig,
    entry: getEntries('./src'),
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name]/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@wordpress/babel-preset-default']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/**/block.json', to: 'dist/[path][name][ext]', context: 'src/' },
            ],
        }),
    ]
};
