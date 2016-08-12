export const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args)
  }
  return curry.bind(this, fn, ...args)
}

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

export const memoize = f => (...params) => {
  f.memoize = f.memoize || {}

  return (params in f.memoize) ? f.memoize[params] :
    f.memoize[params] = f.apply(this, params)
}

export const debounce = (fn, wait = 100, immediate) => (...args) => {
  const obj = this
  let timeout

  const delayed = () => {
    if (!immediate)
      fn.apply(obj, args)
    timeout = null
  }

  if (timeout)
    clearTimeout(timeout)
  else if (immediate)
    fn.apply(obj, args)

  timeout = setTimeout(delayed, wait)
}

export const throttle = (fn, limit) => {
  let wait = false

  return () => {
    if (!wait) {
      fn.call()
      wait = true
      setTimeout(() => wait = false, limit)
    }
  }
}

export const pipe = (...fns) => initial => fns.reduce((acc, fn) => fn(acc), initial)
