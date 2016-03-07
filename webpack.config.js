module.exports = {
  entry: [
    './pareto.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "pareto.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
