export default function flatMap<T, U>(array: T[], fn: Function): U[] {
  return array.reduce((acc, current) => [...acc, ...fn(current)], []);
}
