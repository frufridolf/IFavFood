var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env'].map(require.resolve)}
        //options: {babelrc: false, presets: [['env', {modules: false}]]}
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: APP_DIR,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }

    ]
  }
};

module.exports = config;

//run in cmd -> node_modules\.bin\webpack -d

/**när jag kör ovan så klagar den på spread operatorn i reducers.js. unexpected token */