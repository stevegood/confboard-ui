var TITLE = 'Confboard';

var fs = require('fs');
var React = require('react');
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var App = require('./app/components/App.jsx');
var pkg = require('./package.json');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loader: 'csslint'
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    devServer: {
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: TITLE
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: path.resolve(ROOT_PATH, 'app/main.jsx'),
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: 'app.[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new Clean(['build']),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        'vendor.[chunkhash].js'
      ),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlwebpackPlugin({
        title: TITLE,
        templateContent: renderTemplate(
          fs.readFileSync(path.join(__dirname, 'templates/index.tpl'), 'utf8'),
          {
            app: React.renderToString(<App />)
          }
        )
      })
    ]
  });
}

function renderTemplate(template, replacements) {
  return function() {
    return template.replace(/%(\w*)%/g, function(match){
      var key = match.slice(1, -1);

      return replacements[key] ? replacements[key] : match;
    });
  };
}
