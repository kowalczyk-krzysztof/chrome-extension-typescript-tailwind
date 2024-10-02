import commonConfig from './webpack.common.js'

export default {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
}
