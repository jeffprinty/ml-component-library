const path = require('path');

const webpack = require('webpack');
const validate = require('webpack-validator');
const combineLoaders = require('webpack-combine-loaders');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const GLOBALCSS = new ExtractTextPlugin('assets/styles/globals.css', {
  allChunks: true,
  disable: false
});
const CSSMODULES = new ExtractTextPlugin('assets/styles/styles.css', {
  allChunks: true,
  disable: false
});


const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  devtool: 'source-map',

  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './index.js'
    ],
    vendor: [
      'react', 'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  recordsPath: path.resolve(__dirname, './recordsPath.json'),

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/index.js'),
          path.resolve(__dirname, 'src/libs')
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/assets/styles'),
          path.resolve(__dirname, 'src/assets/styles/normalizer.css'),
          path.resolve(__dirname, 'src/assets/styles/resets.css')
        ],
        loader: CSSMODULES.extract(
          combineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[folder]__[local]--[hash:base64:10]',
                sourceMap: true,
                importLoaders: 2,
                import: false,
                url: true
              }
            },
            {
              loader: 'resolve-url-loader',
              query: {
                sourceMap: true,
                silent: false,
                fail: true,
                keepQuery: false
              }
            },
            {
              loader: 'postcss-loader',
              query: {
                sourceMap: true
              }
            }
          ])
        )
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/assets/styles/normalizer.css'),
          path.resolve(__dirname, 'src/assets/styles/resets.css')
        ],
        loader: GLOBALCSS.extract(
          combineLoaders([{
            loader: 'css-loader',
            query: {
              localIdentName: '[local]',
              sourceMap: true
            }
          }])
        )
      },

      //FONTS
      {
        test: /\.ttf$/,
        include: [
          path.resolve(__dirname, 'src/assets/fonts')
        ],
        loader: 'file-loader',
        query: {
          mimetype: 'application/octet-stream',
          name: 'assets/fonts/[name].[ext]'
        }
      },
      // md files for usage information
      {
        test: /\.md$/,
        loader: 'babel!react-markdown',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }

      //IMAGES
      // {
      //   test: /\.svg$/,
      //   include: [
      //     path.resolve(__dirname, 'src/assets/icons'),
      //     path.resolve(__dirname, 'src/assets/images')
      //   ],
      //   loader: 'url-loader',
      //   query: {
      //     limit: 10000,
      //     minetype: 'image/svg+xml'
      //   }
      // }
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin({
      debug: false
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),

    GLOBALCSS,
    CSSMODULES,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      hash: true,
      cache: true,
      chunksSortMode: 'dependency',
      showErrors: true
    }),

    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),

    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: true,
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),

    //see possible syntax errors at the browser console instead of hmre overlay
    new webpack.NoErrorsPlugin()
  ],

  postcss: () => {
    return [
      require('postcss-smart-import')({
        root: path.resolve(__dirname, 'src'),
        path: ['assets', 'components'],
        skipDuplicates: false
      }),
      require('postcss-cssnext')()
    ];
  },

  resolve: {
    alias: {
      Libs: path.resolve(__dirname, 'src/libs'),
      Shared: path.resolve(__dirname, 'src/components/shared'),
      Styles: path.resolve(__dirname, 'src/assets/styles')
    },

    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', path.resolve(__dirname, 'src')]
  }
};


module.exports = validate(webpackConfig, {
  rules: {
    'no-root-files-node-modules-nameclash': true, //default
    'loader-enforce-include-or-exclude': false,
    'loader-prefer-include': false
  }
});
