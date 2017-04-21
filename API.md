### API Reference

**head** : ```_.head(array)```

Gets the first element of an array

```js
_.head([1, 2, 3]) // 1
```

**tail** : ```_.tail(array)```

Gets all, except the first element of an array.

```js
_.tail([1, 2, 3]) // [2, 3]
```

**flatten** : ```_.flatten(array)```

Flattens (recursively) an array

```js
_.flatten([1, [2, 3], 4]) // [1, 2, 3, 4]
```

**chunk** : ```_.chunk(array, n)```

Returns the chunk of an array based on an integer n

```js
_.chunk([1,2,3,4,5,6,7], 3) // [ [1,2,3], [4,5,6], [7] ]
```

**curry** : ```_.curry(args)```

Gets a curried function

```js
const add = (x, y) => x + y

_.curry(add, 1, 2) // 3
_.curry(add)(1)(2) // 3
_.curry(add)(1, 2) // 3
_.curry(add, 1)(2) // 3
```

**compose** : ```_.compose(f1, f2, ..., fn)```

Gets a composed function

```js
const toUpperCase = x => x.toUpperCase()
const exclaim = x => x + '!!!'

const angry = _.compose(toUpperCase, exclaim)

angry('stop') // 'STOP!!!
```

**debounce** : ```_.debounce(fn, time)```

Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.

```js
let a = 1
const fn = () => a = 42

const debounce = _.debounce(fn, 500)
debounce()

console.log(a) // 1 before 500ms

console.log(a) // 42 after 500ms
```

**pipe** : ```_.pipe(fns) -> fn```

Creates and returns a new function that performs a left-to-right function composition.
```js
const increment = x => x + 1
const decrement = x => x - 1

const piped = pipe(increment, increment, decrement)
piped(0) // 1
```
