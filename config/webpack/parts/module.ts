import { ModuleOptions } from 'webpack';

import { sassLoader, typescriptLoader } from './loaders';

import type { BuildOptions } from '../types';

export const module = (options: BuildOptions): ModuleOptions => ({
  rules: [sassLoader(options), typescriptLoader()],
});
