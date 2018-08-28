import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import AppConfigPlugin from '@eagle/app-config/webpack'
import config from '@eagle/app-config'


const globals = {
  'process.env.NODE_ENV': JSON.stringify(config.env),
  // TODO fix __CONFIG__ - remove it and check @eagle/app-config/webpack to resolve in /client.js
  __CONFIG__: JSON.stringify(config),
}


const webpackConfig = {
  entry: {
    'app': config.paths.client('index.js'),
  },

  output: {
    path: config.paths.build(),
    filename: '[name].[hash:6].js',
    chunkFilename: '[id].[hash:6].js',
    publicPath: config.publicPath,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              //[compile]: true,
              modules: true,
              localIdentName: '[hash:base64:4]',
              //importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "./scss/index";',
              includePaths: [
                config.paths.client(),
                config.paths.base('node_modules'),
                config.paths.base('shared'),
              ],
            },
          }
        ]
      },
    ],
  },

  resolve: {
    modules: [
      config.paths.base('client'),
      config.paths.base('shared'),
      config.paths.base('local_modules'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },

  plugins: [
    new AppConfigPlugin(),
    new webpack.DefinePlugin(globals),
    new webpack.NoEmitOnErrorsPlugin(),
    new ProgressBarPlugin({ clear: false }),
    new HtmlWebpackPlugin({
      title: 'Scentbird',
      template: config.paths.client('index.html'),
      //favicon: config.paths.client('assets/favicon-32x32.png'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}

export default webpackConfig
