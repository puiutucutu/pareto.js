export default function curry(fn: Function, ...args: any[]): Function {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return curry.bind(this, fn, ...args);
}
