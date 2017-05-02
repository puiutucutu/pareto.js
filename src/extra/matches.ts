export default function matches<T>(obj: T, props: T): boolean {
  return Object.keys(props).every(key => obj[key] === props[key]);
}
