// Webpack configuration
module.exports = {
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(s?)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
}
