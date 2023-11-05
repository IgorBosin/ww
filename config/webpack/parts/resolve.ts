import { ResolveOptions } from 'webpack';

import { BuildOptions } from '../types';

export const resolve = ({ paths }: BuildOptions): ResolveOptions => ({
  alias: {},
  extensions: ['.tsx', '.ts', '.js'],
  mainFiles: ['index'],
  modules: [paths.src, 'node_modules'],
  preferAbsolute: true,
});
