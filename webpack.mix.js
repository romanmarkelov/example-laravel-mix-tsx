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
  .babelConfig({
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          'legacy': true
        }
      ],
      [
        '@babel/plugin-proposal-pipeline-operator',
        {
          'proposal': 'minimal'
        }
      ],
      '@vue/babel-plugin-transform-vue-jsx',
      ['@babel/plugin-transform-runtime', {}, 'transform-runtime'],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', {loose: true}],
      ['@babel/plugin-proposal-private-methods', {loose: true}],
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-function-bind'
    ],
    'presets': [
      [
        '@babel/preset-env',
        {
          'modules': false,
          'useBuiltIns': 'entry',
          'loose': true,
          // 'uglify': true,
          'targets': {
            'browsers': [
              '> 1%',
              'last 2 versions',
              'not ie <= 8'
            ]
          }
        },
        'env-preset'
      ]
    ]
  })
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
