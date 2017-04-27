const pipe = (...fns: Function[]): Function => (initial: any) =>
  fns.reduce((acc, fn) => fn(acc), initial);

export default pipe;
