const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

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
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	resolve: {
		mainFields: [ 'firebase', 'browser', 'module', 'main' ],
	},
	devtool: 'cheap-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
		stats: {
			colors: true,
			chunks: false,
			children: false,
		},
		before() {
			spawn('electron', [ '.' ], { shell: true, env: process.env, stdio: 'inherit' })
				.on('close', code => process.exit(0))
				.on('error', spawnError => console.error(spawnError));
		},
	},
};
