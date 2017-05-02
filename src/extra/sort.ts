export default function sort<T>(
  collection: Array<T>,
  property: string
): Array<T> {
  return collection.sort((a, b) => {
    if (a[property] === b[property]) return 0;
    if (a[property] > b[property]) return 1;
    if (a[property] < b[property]) return -1;
  });
}
