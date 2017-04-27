export default function matches(obj: any, props: any) {
  return Object.keys(props).every(key => obj[key] === props[key]);
}
