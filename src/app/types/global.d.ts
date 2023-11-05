declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }

  const classnames: ClassNames;

  export = classnames;
}
