const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
	SRC: path.join(__dirname, '/src'),
	DIST: path.join(__dirname, '/dist'),
	FONTS: path.join(__dirname, '/dist/fonts'),
	ASSETS: path.join(__dirname, '/assets'),
};

module.exports = {
	entry: {
		app: path.join(PATH.SRC, 'index.js'),
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(PATH.DIST),
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			assets: path.resolve(PATH.ASSETS),
			src: path.resolve(PATH.SRC),
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: { path: `./postcss.config.js` },
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true },
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: { path: `./postcss.config.js` },
						},
					},
				],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, '/public/index.html'),
			minify: false,
			favicon: path.join(__dirname, '/public/favicon.ico')
		}),
	],
};
