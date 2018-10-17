import path from 'path';

export default {
    entry: './app/index.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'remediatorCli.js',
        library: 'remediatorCli',
        libraryTarget: 'umd',
    },

    resolve: {
        alias: {
            app: path.resolve(__dirname, './app'),
        },
    },

    target: 'node',
};
