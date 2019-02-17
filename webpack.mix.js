const mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Configuration section
 * You can change it
 */
const RESOURCE_PATH = 'src';
const DESTINATION_PATH = 'dist';


mix
  .disableNotifications()
  .setPublicPath(DESTINATION_PATH)
  .ts(`${RESOURCE_PATH}/main.ts`, `${DESTINATION_PATH}/js`)
  .webpackConfig({
    devServer: {
      open: true,
      port: 8080,
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: './public/favicon.ico',
        template: './public/index.html',
      })
    ],
  })
  .webpackConfig({
    resolve: {
      extensions: ['.ts', '.tsx', '.vue', '.vuex'],
      alias: {
        '@': `${RESOURCE_PATH}/`,
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              ts: 'ts-loader',
              tsx: 'babel-loader!ts-loader',
            },
          },
        },
        { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/TS\.vue$/] } },
        {
          test: /\.tsx$/,
          loader: 'babel-loader!ts-loader',
          options: { appendTsxSuffixTo: [/TSX\.vue$/] },
        },
      ],
    },
  });
