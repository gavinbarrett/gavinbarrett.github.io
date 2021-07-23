module.exports = {
	entry: './src/App.jsx',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{ 
						loader: 'style-loader'
					},
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader?modules',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|ttf)$/,
				loader: 'url-loader',
			},
			{
				test: /\.svg/,
				use: {
					loader: "svg-url-loader",
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		filename: 'App.js',
		path: __dirname + '/dist',
	},
};
