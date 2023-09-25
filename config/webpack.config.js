process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Update with your entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Update with your desired output directory
    filename: 'bundle.js', // Update with your desired output filename
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Include .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add more rules for other file types (e.g., CSS, images) as needed
    ],
  },
  plugins: [
    // Define any necessary plugins here
    // For example, to set environment variables, you can use the webpack.DefinePlugin
    new webpack.DefinePlugin({
      'process.env.REACT_APP_CONTRACT_ADDRESS': JSON.stringify('0x9612Fc26Ae91619F4BB70dE0e8b44B1FEd88b8C2'),
    }),
  ],
  // Other webpack configuration options can be added here
};
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // Update with your entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Update with your desired output directory
    filename: 'bundle.js', // Update with your desired output filename
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Include .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add more rules for other file types (e.g., CSS, images) as needed
    ],
  },
  plugins: [
    // Define any necessary plugins here
    // For example, to set environment variables, you can use the webpack.DefinePlugin
    new webpack.DefinePlugin({
      'process.env.REACT_APP_CONTRACT_ADDRESS': JSON.stringify('0x9612Fc26Ae91619F4BB70dE0e8b44B1FEd88b8C2'),
    }),
  ],
  // Other webpack configuration options can be added here
};
