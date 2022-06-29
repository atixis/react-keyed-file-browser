const path = require('path')
const NodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'file-manager.js',
    library: 'file-manager',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'esbuild-loader',
        include: path.join(__dirname, './src/'),
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
      {
        test: /.*\.sass*/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, '/src'),
      },
    ],
  },
  externals: NodeExternals(),
}
