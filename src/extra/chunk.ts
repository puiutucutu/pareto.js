export default function chunks<T>(array: Array<T>, len: number): Array<T> {
  const chunks: Array<any> = [], n = array.length;
  let i = 0;

  while (i < n) {
    chunks.push(array.slice(i, (i += len)));
  }

  return chunks;
}
