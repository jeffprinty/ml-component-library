const path = require('path');

const webpack = require('webpack');
const validate = require('webpack-validator');
const combineLoaders = require('webpack-combine-loaders');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  devtool: 'source-map', //javascript sourcemaps

  entry: {
    app: [
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'writers-help-search.js',
    library: 'Library',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/assets/styles'),
          path.resolve(__dirname, 'src/components')
        ],
        loader: combineLoaders([
          {
            loader: 'style'
          },
          {
            loader: 'css',
            query: {
              sourceMap: true,
              modules: true,
              localIdentName: '[folder]__[local]--[hash:base64:10]',
              import: false,
              url: true
            }
          },
          {
            loader: 'resolve-url',
            query: {
              sourceMap: true,
              silent: false,
              fail: true,
              keepQuery: true
            }
          },
          {
            loader: 'postcss',
            query: {
              sourceMap: true
            }
          }
        ])
      },
      {
        test: /\.ttf$/,
        include: [
          path.resolve(__dirname, 'src/assets/fonts'),
          path.resolve(__dirname, 'dist/assets/fonts')
        ],
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'src/assets/icons'),
          path.resolve(__dirname, 'dist/assets/icons')
        ],
        loader: 'file',
        query: {
          limit: 10000,
          minetype: 'image/svg+xml',
          name: 'assets/icons/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  postcss: (_webpack) => {
    return [
      require('postcss-smart-import')({
        addDependencyTo: _webpack,
        root: path.resolve(__dirname, 'src'),
        path: ['assets', 'components'],
        skipDuplicates: false
      }),
      require('postcss-cssnext')()
    ];
  },

  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'src/assets/images')
    },
    extensions: ['', '.js', '.jsx']
  }
};


module.exports = validate(webpackConfig, {
  rules: {
    'no-root-files-node-modules-nameclash': true, //default
    'loader-enforce-include-or-exclude': false,
    'loader-prefer-include': true
  }
});
