export default function chunks(array: Array<any>, len: number): Array<any> {
  const chunks = [], n = array.length;
  let i = 0;

  while (i < n) {
    chunks.push(array.slice(i, i += len));
  }

  return chunks;
}
