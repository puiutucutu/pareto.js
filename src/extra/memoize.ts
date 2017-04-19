const memoize = (f: any) => (...params: any[]) => {
  f.memoize = f.memoize || {};

  return (params in f.memoize) ? f.memoize[params] :
    f.memoize[params] = f.apply(this, params);
};

export default memoize;
