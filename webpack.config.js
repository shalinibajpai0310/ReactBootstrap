var config = {
	entry: './scripts/main.js',

	output: {
		path: './',
		filename: 'index.js',
	},

	// devServer:{
	// 	host: "10.19.4.105",
	// 	port : "8383"
	// },

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
