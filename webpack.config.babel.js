import {join} from 'path'

const include = join(__dirname, 'src')

export default {
  entry: './src/pareto',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'paretojs',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include},
      {test: /\.json$/, 'loader': 'json', include},
    ]
  }
}