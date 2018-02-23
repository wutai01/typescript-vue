/* ==========================================================
* webpack.common.js v20170621
* ==========================================================
*
* 基础配置
* ========================================================== */
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var os = require('os');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // 加载器
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'tslint-loader'
    },
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    },
    {
      test: /\.js$/,
      // use: ['babel-loader'],
      exclude: /node_modules/,
      include : [resolve('src')],
      loader: 'happypack/loader?id=happybabel'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'postcss-loader']
      })
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },
  // 指定的依赖不会被webpack解析
  externals: {
    
  },
  plugins: [
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true
    })
  ],
  // 其它解决方案配置(重定向)
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.css', '.ts'],
    alias: {
      'moment': 'moment/min/moment-with-locales.min.js',
      'vue-class-component': 'vue-class-component/dist/vue-class-component.common.js',
      'vuex-class': 'vuex-class/lib/index.js',
      'vue-property-decorator': 'vue-property-decorator/lib/vue-property-decorator.umd.js',
      'vue': 'vue/dist/vue.min.js',
      'vue-router': 'vue-router/dist/vue-router.min.js',
      'src': resolve('src'),
      'components': resolve('src/components'),
      'config': resolve('src/config'),
      'images': resolve('src/images'),
      'store': resolve('src/store'),
      'view': resolve('src/view'),
      'utils': resolve('src/utils')
    }
  }
};