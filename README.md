# pareto.js

### An extremely small, intuitive and fast functional utility library for JavaScript

- Only 7 core functions
- Written in TypeScript
- Encourages immutability
- Only [pure functions](https://en.wikipedia.org/wiki/Pure_function) (no side-effects)
- Smaller than [lodash](https://github.com/lodash/lodash)

[![build](https://img.shields.io/travis/concretesolutions/pareto.js/master.svg)](https://travis-ci.org/concretesolutions/pareto.js)
[![downloads](https://img.shields.io/npm/dm/paretojs.svg)](https://www.npmjs.com/package/paretojs)
[![npm](https://img.shields.io/npm/v/paretojs.svg)](https://www.npmjs.com/package/paretojs)

## Example

```js
import { flatten, tail } from 'paretojs'

flatten([1, 2, [3, 4], 5]) // [1, 2, 3, 4, 5]
tail([1, 2, 3]) // [2, 3]
```
## Installation

To install the stable version:

```
npm install --save paretojs
```

This assumes that you’re using [npm](https://www.npmjs.com/) with a module bundler like [Webpack](http://webpack.github.io)

## How

**ES2015 or TypeScript:**

```js
import _ from 'paretojs'
```

or

```js
import { chunk, debounce } from 'paretojs'
```

**CommonJS:**

```js
var _ = require('paretojs');
```

or

```js
var chunk = require('paretojs').chunk;
var debounce = require('paretojs').debounce;
```

**UMD:**

```html
<script src="https://unpkg.com/paretojs/dist/paretojs.min.js"></script>
```

## API

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

## Misc

If you want to add a new function, please open an issue and explain why.

## Docs

* [Contributing](https://github.com/concretesolutions/pareto.js/blob/master/CONTRIBUTING.md)
* [Changelog](https://github.com/concretesolutions/pareto.js/blob/master/CHANGELOG.md)
* [Code of Conduct](https://github.com/concretesolutions/pareto.js/blob/master/CODE_OF_CONDUCT.md)
* [License](https://github.com/concretesolutions/pareto.js/blob/master/LICENSE.md)
