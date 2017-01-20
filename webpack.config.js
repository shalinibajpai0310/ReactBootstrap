var config = {
	entry: './scripts/main.js',

	output: {
		path: './',
		filename: 'index.js',
	},

	devServer: {
		host: "10.20.4.193",
		inline: true,
		port: 8081
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',

				query: {
					presets: ['es2015', 'react']
				}
         }
      ]
	}
}

module.exports = config;
