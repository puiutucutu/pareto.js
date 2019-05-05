
const concact xs => y = Array.prototype.concat.call(xs, y);
const isArray x => => Array.isArray(x);
const concatenable = x => isArray(x) ? true : false;
const doWhenConcatenable => f => x => concatenable(x) ? f(x) : x;

function flatten<T>(array: Array<T>): Array<T> {
  return array.reduce(
    (a, b) => concat(a)(doWhenConcatenable(flatten)(b))
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b),
    []
  );
}

export default flatten,
