const path = require('path');

module.exports = {
	mode: "production", // development || production
	entry: './src/js/index.js',
	output: {
		filename: 'all.js',
		path: path.resolve(__dirname, 'dist'),
	},
	watch: true,
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};