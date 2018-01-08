const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //вызываем модуль плагина для подключения страниц html 
const merge = require('webpack-merge');
const pug = require('./webpack/pug'); //вызываем модуль pug
const devserver = require('./webpack/devserver'); //вызываем модуль devserver
const sass = require('./webpack/sass'); //вызываем модуль sass
const css = require('./webpack/css'); //вызываем модуль css
const extractCSS = require('./webpack/css.extract'); //вызываем модуль плагина ExtractCSS
const uglifyJS = require('./webpack/js.uglify'); //вызываем модуль плагина Uglifyjs
const images = require('./webpack/images'); //вызываем модуль картинок
const fonts = require('./webpack/fonts'); //вызываем модуль шрифтов

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const common = merge ([
  {
  entry: {
    'about': PATHS.source + '/pages/about/about.js',
    'blog': PATHS.source + '/pages/blog/blog.js',
    'index': PATHS.source + '/pages/index/index.js',
    'works': PATHS.source + '/pages/works/works.js',
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'common'],
      template: PATHS.source + '/pages/index/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about', 'common'],
      template: PATHS.source + '/pages/about/about.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog', 'common'],
      template: PATHS.source + '/pages/blog/blog.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'works.html',
      chunks: ['works', 'common'],
      template: PATHS.source + '/pages/works/works.pug'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
  },
  pug(),
  images(),
  fonts()
]);

module.exports = function(env) {
  if (env === 'production'){
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
  if (env === 'development'){
    return merge([
      {},
      common,
      devserver(),
      sass(),
      css(),
    ])
  }
};