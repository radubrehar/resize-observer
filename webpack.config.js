module.exports = {
  entry: './index.js',
  module: {
    rules: [{ exclude: /node_modules/, test: /\.js$/, use: 'babel-loader' }]
  }
};
