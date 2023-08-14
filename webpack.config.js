const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "production", // development || production
	entry: './src/js/index.js',
	output: {
		filename: 'all.js',
		path: path.resolve(__dirname, 'dist/js/'),
	},
	plugins: [
		new HtmlWebpackPlugin(
			{ 
				template: './src/index.html', 
				filename: "../index.html",
				minify: true
			}
		)
	],
	watch: true
};