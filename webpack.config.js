const path = require('path');

module.exports = {
	entry: './app/Greeter.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	mode: 'production'
};
