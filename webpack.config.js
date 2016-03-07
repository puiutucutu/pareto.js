module.exports = {
  entry: [
    './src/pareto.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "pareto.min.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
