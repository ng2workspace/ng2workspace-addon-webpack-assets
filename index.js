module.exports = function(options, workspace) {
  var path = require('path');
  var webpackConfig = workspace.get('webpack').webpackConfig;
  var CopyWebpackPlugin  = require('copy-webpack-plugin');

  var from = options.from || path.join(workspace.config.dir_src, 'assets');
  var to = options.to || 'assets';

  webpackConfig.plugins.push(new CopyWebpackPlugin([{from: from, to: to}]));
};