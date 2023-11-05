import { Configuration } from 'webpack';

import { devServer, module, plugins, resolve } from './parts';

import type { BuildOptions } from './types';

export const config = (options: BuildOptions): Configuration => {
  const { isDev, mode, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    module: module(options),
    plugins: plugins(options),
    resolve: resolve(options),
    devServer: devServer(options),
    devtool: isDev ? 'inline-source-map' : undefined,
  };
};
