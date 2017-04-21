export default function tail<T>(array: Array<T>): Array<T> {
  return array.slice(1, array.length);
}
