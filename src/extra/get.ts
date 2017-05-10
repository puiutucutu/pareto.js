export default function get<T>(
  object: T,
  path: string,
  defaultValue: any = undefined
): any {
  if (path) {
    const pathSplitted = path.split(".");
    const property = pathSplitted[0];
    const findProperty = object[property];
    if (findProperty && path.indexOf(".") === -1) {
      return findProperty;
    }
    const newPath = pathSplitted.slice(1, pathSplitted.length).join(".");
    return get(findProperty, newPath, defaultValue);
  }
  return defaultValue;
}
