const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'toastui-vue-image-editor.js',
    library: 'toastui',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  externals: {
    'hitutor-image-editor': {
      commonjs: 'hitutor-image-editor',
      commonjs2: 'hitutor-image-editor',
      amd: 'hitutor-image-editor',
      root: ['hitutor', 'ImageEditor'],
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules|example/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnError: true,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  devtool: 'source-map',
};
