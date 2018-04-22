require('dotenv').config();
var path = require('path')
var webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const developmentMode = process.env.NODE_ENV;

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
	},

  devtool: developmentMode && 'source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
		hot: true,
		inline: false,
		lazy: false,
		open: true	
  },
  resolve: {
    alias: {
      components: path.resolve('src/components'),
      containers: path.resolve('src/components/containers'),
      presentational: path.resolve('src/components/presentational'),
      //img: path.resolve('src/client/assets/images'),
      //services: path.resolve('src/api')
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __PRODUCTION__: process.env.PROD,
      __DEV__: process.env.DEV,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
		})
  ]
}

module.exports = merge(baseConfig, config);