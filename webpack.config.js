const HtmlWebpackPlugin = require(require.resolve("html-webpack-plugin", { paths: [process.cwd()] }));

module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
