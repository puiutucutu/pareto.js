export default function sort(
  collection: Array<any>,
  property: string
): Array<any> {
  return collection.sort((a, b) => {
    if (a[property] === b[property]) return 0;
    if (a[property] > b[property]) return 1;
    if (a[property] < b[property]) return -1;
  });
}
