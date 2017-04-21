export default function compose(...fns: Function[]): Function {
  return fns.reduce((f, g) => (...args: any[]) => f(g(...args)));
}
