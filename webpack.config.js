const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('precss'),
              require('autoprefixer')
            ]
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello, world!',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      minify: { collapseWhitespace: true }
    })
  ]
};
