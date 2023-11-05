import { Configuration } from 'webpack';

import path from 'path';

import { config } from './config/webpack';

import type { BuildEnv, BuildPaths } from './config/webpack/types';

const webpackConfig = (env: BuildEnv): Configuration => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  return config({
    isDev,
    mode,
    paths,
    port,
  });
};

export default webpackConfig;
