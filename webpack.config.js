var config = {
	entry: './scripts/main.js',

	output: {
		path: './',
		filename: 'index.js',
	},

	devServer:{
		host: "10.19.4.80",
		port : "8083"
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				query: {
					presets: ['es2015', 'react']
				}
         }
      ]
	}
}

module.exports = config;
