const path = require('path');
const fs = require('fs');
const glob = require('glob');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const CopyPlugin = require("copy-webpack-plugin");
// 定义特定的目录
const specificDirectories = ['src/admin', 'src/public', 'src/common'];
function getEntries(directory) {
    const entries = {};

    function getFiles(dir) {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach(file => {
            const filePath = path.join(dir, file.name);
            const isDirectory = file.isDirectory();
            const isBlockDirectory = dir.includes(path.normalize('src/blocks'));
            // 检查是否在特定的目录中
            const isInSpecificDirectory = specificDirectories.some(specificDirectory =>
                dir.includes(path.normalize(specificDirectory)));
            if (isDirectory) {
                getFiles(filePath);
            } else if (file.name.endsWith('.js') && (!isBlockDirectory || file.name === 'index.js') && !isInSpecificDirectory) {
                const entryName = path.relative(directory, filePath).replace(/\.js$/, '');
                entries[entryName] = filePath;
            }
        });
    }

    getFiles(directory);

    return entries;
}
function getSpecificEntries() {
    let entries = {};
    specificDirectories.forEach(directory => {
        glob.sync(`./${directory}/**/*.js`).forEach(filePath => {
            let entryName = filePath.replace('./src/', '').replace('.js', '');
            entries[entryName] = filePath;
        });
    });
    return entries;
}

module.exports = {
    ...defaultConfig,
    entry: {
        // 从src目录下的每个块的index.js文件创建一个入口点
        ...getEntries(path.resolve(__dirname, 'src')),
        ...getSpecificEntries(),
    },
    output: {
        filename: (pathData) => {
            const isInSpecificDirectory = specificDirectories.some(directory =>
                pathData.chunk.name.startsWith(directory.replace('src/', '')));
            if (isInSpecificDirectory) {
                return '../[name].js';
            }
            return '[name].js';
        },
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            // 处理 SCSS 文件
            {
                test: /\.scss$/,
                use: [
                    // 其他 loader 配置...
                    {
                        loader: 'file-loader',
                        options: {
                            name: (resourcePath) => {
                                // 获取 SCSS 文件相对于 src 目录的相对路径
                                const relativePath = path.relative(path.resolve(__dirname, 'src'), resourcePath);
                                // 替换文件扩展名为 '.css'
                                const cssFilePath = relativePath.replace(/\.scss$/, '.css');
                                // 返回最终的目标路径
                                return cssFilePath;
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        ...defaultConfig.plugins,
        // 将每个块的block.json文件复制到dist目录下
        new CopyPlugin({
            patterns: [
                { from: '**/block.json', to: '[path][name][ext]', context: path.resolve(__dirname, 'src') },
            ],
        }),
    ],
};