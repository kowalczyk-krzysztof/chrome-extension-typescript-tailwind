'use strict'

import path from 'path'
import { fileURLToPath } from 'url'
import SizePlugin from 'size-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import PATHS from './paths.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '..', 'src', 'app.ts'),
    background: path.resolve(__dirname, '..', 'src', 'background.ts'),
  },
  output: {
    path: PATHS.build || path.join(__dirname, '../build'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  stats: {
    all: false,
    errors: true,
    builtAt: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new SizePlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: 'public',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CopyPlugin({
      patterns: [{ from: '.', to: '.', context: 'public' }],
    }),
  ],
}
