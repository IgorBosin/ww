import { RuleSetRule } from 'webpack';

export const typescriptLoader = (): RuleSetRule => ({
  exclude: /node_modules/,
  test: /\.tsx?$/,
  use: 'ts-loader',
});
