const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: path.resolve(__dirname, '/'),
        hot: true,
    },
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        library: 'LibraryName',
        libraryTarget: 'var',
    }
};
