'use strict'

import { merge } from 'webpack-merge'
import common from './webpack.common.js'
import PATHS from './paths.js'

const config = merge(common, {
  entry: {
    app: PATHS.src + '/app.ts',
    background: PATHS.src + '/background.ts',
  },
})

export default config
