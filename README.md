# pareto.js

###### A trully functional small utility library that only has what you really need.

[![build](https://img.shields.io/travis/concretesolutions/pareto.js/master.svg)](https://travis-ci.org/concretesolutions/pareto.js)
[![code climate](https://codeclimate.com/github/concretesolutions/pareto.js/badges/gpa.svg)](https://codeclimate.com/github/concretesolutions/pareto.js)
[![test coverage](https://codeclimate.com/github/concretesolutions/pareto.js/badges/coverage.svg)](https://codeclimate.com/github/concretesolutions/pareto.js/coverage)
[![downloads](https://img.shields.io/npm/dm/paretojs.svg)](https://www.npmjs.com/package/paretojs)
[![npm](https://img.shields.io/npm/v/paretojs.svg)](https://www.npmjs.com/package/paretojs)

### Advantages

1. Lightweight

2. Functional
 * Only pure functions
 * No side-effects
 * Encourages immutability

3. Better and smaller API

4. Made with the newest stuff:
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

Import pareto.js

ES6:

```js
import _ from 'paretojs'
```

or

```js
import { head, tail } from 'paretojs'
```

ES5 (CommonJS):

```js
var _ = require('paretojs');
```

or 

```js
var head = require('paretojs').head;
var tail = require('paretojs').tail;
```

ES5 (UMD):

```html
<script src="node_modules/paretojs/dist/index.umd.min.js"></script>
```

And use it:

```js
_.remove([1, 2 , 3], 2) // [1, 3]
```

### Docs

* [API Reference](https://github.com/concretesolutions/pareto.js/blob/master/API.md)
* [Contributing](https://github.com/concretesolutions/pareto.js/blob/master/CONTRIBUTING.md)
* [License](https://github.com/concretesolutions/pareto.js/blob/master/LICENSE.md)
