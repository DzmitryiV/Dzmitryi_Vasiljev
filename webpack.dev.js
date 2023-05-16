const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const path = require('path');

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 8080,
    overlay: true,
  },
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 100,
    ignored: ['node_modules/**'],
  },

});

// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
