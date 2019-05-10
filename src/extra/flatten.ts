// from outside fn declaration 
const uncurry = f => (a, b) => f (a) (b);
const reduce = f => accumulator => xs => Array.prototype.reduce.call
(
  xs,
  uncurry(f),
  accumulator
)
const concat = xs => y => Array.prototype.concat.call(xs, y);
const isArray = x => Array.isArray(x);

// inside fn declaration file
function flatten<T>(xs: Array<T>): Array<T> {
  return reduce
    ((a) => (b) => concat (a) (isArray (b) ? flatten (b) : b))
    ([])
    (xs)
;

export default flatten,
