export default function prop<T>(property: string, object: T): T {
  return object[property];
}
