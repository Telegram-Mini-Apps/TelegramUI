/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssGapProperties = require('postcss-gap-properties');
const cssImport = require('postcss-import');
const postcssLogical = require('postcss-logical');
const cssModules = require('postcss-modules');

module.exports = {
  mode: 'production',
  entry: {
    styles: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './trash/[name].js.tmp',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'swc-loader',
        options: {
          jsc: {
            experimental: {
              plugins: [
                [
                  'swc-plugin-css-modules',
                  {
                    generate_scoped_name: 'tgui.[hash]',
                  },
                ],
              ],
            },
          },
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  cssImport(),
                  autoprefixer(),
                  postcssLogical(),
                  cssModules({
                    generateScopedName: 'tgui.[hash]',
                    getJSON: () => {},
                  }),
                  postcssGapProperties(),
                  cssnano({
                    preset: [
                      'default',
                      {
                        calc: false,
                        discardEmpty: true,
                      },
                    ],
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new RemovePlugin({
      after: {
        root: './dist',
        include: ['trash'],
      },
    }),
  ],
  stats: {
    all: false,
    assets: true,
    errors: true,
    warnings: false,
  },
};
