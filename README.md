# pareto.js

###### A lightweight truly functional utility library that follows the 80/20 principle.

[![build status](https://img.shields.io/travis/concretesolutions/pareto.js/master.svg?style=flat-square)](https://travis-ci.org/concretesolutions/pareto.js)
[![code climate](https://codeclimate.com/github/concretesolutions/pareto.js/badges/gpa.svg)](https://codeclimate.com/github/concretesolutions/pareto.js)
[![test coverage](https://codeclimate.com/github/concretesolutions/pareto.js/badges/coverage.svg)](https://codeclimate.com/github/concretesolutions/pareto.js/coverage)
[![npm version](https://img.shields.io/npm/v/paretojs.svg?style=flat-square)](https://www.npmjs.com/package/paretojs)
[![npm downloads](https://img.shields.io/npm/dm/paretojs.svg?style=flat-square)](https://www.npmjs.com/package/paretojs)

We all love *underscore* and *lodash*, but most of the times they add too much code, and therefore, too many KBs that we don't use.

Pareto only has what you really need.

[http://www.concretesolutions.com.br/pareto.js/](http://www.concretesolutions.com.br/pareto.js/)

### Advantages

1. Lightweight
 * [underscore.min.js](https://github.com/jashkenas/underscore/blob/master/underscore-min.js) ~ 16kb
 * [lodash.min.js](https://github.com/lodash/lodash/blob/master/dist/lodash.min.js) ~ 60kb
 * pareto.min.js ~ 3kb

2. Functional
 * Only pure functions
 * No side-effects
 * Encourages immutability

4. Better API

5. Made with the newest stuff:
 * ES6
 * Babel
 * Webpack

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
### Docs

* [API Reference](https://github.com/concretesolutions/pareto.js/blob/master/API.md)
* [Contributing](https://github.com/concretesolutions/pareto.js/blob/master/CONTRIBUTING.md)
* [License](https://github.com/concretesolutions/pareto.js/blob/master/LICENSE.md)
