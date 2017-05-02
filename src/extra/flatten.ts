export default function flatten<T>(array: Array<T>): Array<T> {
  return array.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b),
    []
  );
}
