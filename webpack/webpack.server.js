const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
		// Inform webpack that we are building a bundle 
		// for nodeJS, rather than for the browser
		target: 'node',
    entry: './src/server/index.js',
    externals: [nodeExternals()],
    devServer: {
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
      hot: true,
      inline: false,
      lazy: false,
      open: true	
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../build'),
      publicPath: '/'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __CLIENT__: false,
        __SERVER__: true,
        __PRODUCTION__: process.env.PROD,
        __DEV__: process.env.DEV
      })
    ]
	}
	
	module.exports = merge(baseConfig, config);