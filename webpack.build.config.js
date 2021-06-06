const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'assets/img',
					name: '[name].[ext]',
				},
			},
		],
	},
	target: 'electron-renderer',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			/* favicon: './public/favicon.ico', */
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
	stats: {
		colors: true,
		children: false,
		chunks: false,
		modules: false,
	},
	optimization: {
		minimize: true,
	},
};
