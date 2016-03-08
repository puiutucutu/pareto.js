# pareto.js

###### A lightweight truly functional utility library that follows the 80/20 principle.

We all love *underscore* and *lodash*, but most of the times they add too much code, and therefore, too many KBs that we don't use.

Pareto only has what you really need.

[![build status](https://img.shields.io/travis/concretesolutions/pareto.js/master.svg?style=flat-square)](https://travis-ci.org/concretesolutions/pareto.js)
[![npm version](https://img.shields.io/npm/v/paretojs.svg?style=flat-square)](https://www.npmjs.com/package/paretojs)
[![npm downloads](https://img.shields.io/npm/dm/paretojs.svg?style=flat-square)](https://www.npmjs.com/package/paretojs)

### Advantages

1. It's lightweight
2. Only pure functions
3. Encourages immutability
4. Made with the newest stuff: ES6, Babel, Webpack

### Installation

To install the stable version:

```
npm install --save paretojs
```

This assumes that you’re using [npm](https://www.npmjs.com/) with a module bundler like [Webpack](http://webpack.github.io)

### How

Import pareto.js:

```js
import _ from 'paretojs'
```

And use it:

```js
const myArray = [1, 2, 3]
const newArray = _.remove(myArray, 2)

console.log(myArray) // [1, 2, 3]
console.log(newArray) // [1, 2]

```

### Contributing

Fork, then clone the repository:

```
git clone https://github.com/<your-username>/pareto.js.git
```

If you don't have webpack and mocha yet, run:

```
npm install -g webpack mocha
```

Run the tests:

```
npm test
```

Run the project:

```
npm start
```

### License

The MIT License (MIT)
Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
