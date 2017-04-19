export default function compose(...fns: any[]): Function {
  return fns.reduce((f, g) => (...args: any[]) => f(g(...args)));
}
