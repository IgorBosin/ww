export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  isDev: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
}
