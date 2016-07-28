# pareto.js

### An extremely small, intuitive and fast functional utility library for JavaScript

- Only 15 core functions
- Written in ES2015
- Encourages immutability
- Only [pure functions](https://en.wikipedia.org/wiki/Pure_function) (no side-effects)
- Smaller than [lodash](https://github.com/lodash/lodash)

[![build](https://img.shields.io/travis/concretesolutions/pareto.js/master.svg)](https://travis-ci.org/concretesolutions/pareto.js)
[![code climate](https://codeclimate.com/github/concretesolutions/pareto.js/badges/gpa.svg)](https://codeclimate.com/github/concretesolutions/pareto.js)
[![test coverage](https://codeclimate.com/github/concretesolutions/pareto.js/badges/coverage.svg)](https://codeclimate.com/github/concretesolutions/pareto.js/coverage)
[![downloads](https://img.shields.io/npm/dm/paretojs.svg)](https://www.npmjs.com/package/paretojs)
[![npm](https://img.shields.io/npm/v/paretojs.svg)](https://www.npmjs.com/package/paretojs)

### Example

```js
import { flatten, tail } from 'paretojs'

flatten([1, 2, [3, 4], 5]) // [1, 2, 3, 4, 5]
tail([1, 2, 3]) // [2, 3] 
```
### Installation

To install the stable version:

```
npm install --save paretojs
```

This assumes that you’re using [npm](https://www.npmjs.com/) with a module bundler like [Webpack](http://webpack.github.io)

### How

**ES2015 or TypeScript:**

```js
import _ from 'paretojs'
```

or

```js
import { head, tail } from 'paretojs'
```

**CommonJS:**

```js
var _ = require('paretojs');
```

or 

```js
var head = require('paretojs').head;
var tail = require('paretojs').tail;
```

**UMD:**

```html
<script src="node_modules/paretojs/dist/index.umd.min.js"></script>
```

### Docs

* [API Reference](https://github.com/concretesolutions/pareto.js/blob/master/API.md)
* [Contributing](https://github.com/concretesolutions/pareto.js/blob/master/CONTRIBUTING.md)
* [License](https://github.com/concretesolutions/pareto.js/blob/master/LICENSE.md)
