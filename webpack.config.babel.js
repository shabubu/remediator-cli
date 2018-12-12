import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './app/index.js',

  externals: [nodeExternals()],

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
