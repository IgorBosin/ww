import type { BuildOptions } from '../types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const devServer = ({ isDev, port }: BuildOptions): DevServerConfiguration =>
  isDev
    ? {
        historyApiFallback: true,
        open: true,
        port,
      }
    : undefined;
