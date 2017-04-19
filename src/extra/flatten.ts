export default function flatten(array: Array<any>): Array {
  return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}
