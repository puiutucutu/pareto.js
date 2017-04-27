export default function memoize(fn: Function) {
  const memo: any = {};
  const slice = Array.prototype.slice;

  return function() {
    const args = slice.call(arguments);

    if (args in memo) {
      return memo[args];
    }
    return (memo[args] = fn.apply(this, args));
  };
}
