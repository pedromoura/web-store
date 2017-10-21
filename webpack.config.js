const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			 title: 'JSChanllenge',
			 filename: 'index.html',
			 template: './src/assets/index.html'			 
		})
  	],
  	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
  	},
};