import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import type { BuildOptions } from '../../types';

export const sassLoader = ({ isDev }: BuildOptions): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    {
      loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      options: {
        esModule: false,
      },
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => resPath.includes('.module.'),
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
        },
      },
    },
    {
      loader: 'sass-loader',
    },
  ],
});
