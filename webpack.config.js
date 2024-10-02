import commonConfig from './webpack.common.js'

export default {
  ...commonConfig,
  mode: 'production',
  devtool: 'source-map',
  stats: {
    all: false,
    errors: true,
    builtAt: true,
  },
}
