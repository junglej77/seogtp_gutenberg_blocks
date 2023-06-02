const path = require('path');
const fs = require('fs');
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const CopyPlugin = require("copy-webpack-plugin");

function getEntries(directory) {
    const entries = {};

    function getFiles(dir) {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach(file => {
            const filePath = path.join(dir, file.name);
            const isDirectory = file.isDirectory();

            if (isDirectory) {
                getFiles(filePath);
            } else {
                if (file.name === 'index.js') {
                    const entryName = path.relative(directory, dir);
                    entries[entryName] = filePath;
                }
            }
        });
    }

    getFiles(directory);

    return entries;
}
module.exports = {
    ...defaultConfig,
    entry: {
        // 从src目录下的每个块的index.js文件创建一个入口点
        ...getEntries(path.resolve(__dirname, 'src')),
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'dist'),
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