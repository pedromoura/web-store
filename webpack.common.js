const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: ['./src/index.js', './src/scss/main.scss'],
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{ test: /\.scss$/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
			{ test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'JSChanllenge',
			filename: 'index.html',
			template: './src/assets/index.html',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'commons.js',
			minChunks: 2,
		}),
		new ExtractTextPlugin('styles/[name].css', {
			allchuncks: true,
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};
