### API Reference

###### Array

**head** : ```_.head(array)```

Gets the first element of an array

```js
_.head([1, 2, 3]) // 1
_.head([]) // undefined
```

**tail** : ```_.tail(array)```

Gets all but the first element of an array.

```js
_.tail([1, 2, 3]) // [2, 3]
_.tail([]) // []
```

**last** : ```_.last(array)```

Gets the last element of an array.

```js
_.last([1, 2, 3]) // 3
_.last([]) // undefined
```

**flatten** : ```_.flatten(array)```

Flattens (recursively) an array

```js
_.flatten([1, [2, 3], 4]) // [1, 2, 3, 4]
_.flatten([]) // []
```

**remove** : ```_.remove(array, element)```

Removes the first occurence of the element from array without modifying it

```js
_.remove([1, 2, 3], 2) // [1, 3]
_.remove([1, 2, 2, 2, 3], 2) // [1, 2, 2 3]
_.remove([{ name: 'name1' }, { name: 'name2' }], { name:'name1' }) // [{ name: 'name2' }]
```

**removeAll** : ```_.removeAll(array, element)```

Removes all occurences of the element from array without modifying it

```js
_.removeAll([1, 2, 3], 2) // [1, 3]
_.removeAll([1, 2, 2, 2, 3], 2) // [1, 2, 2 3]
_.removeAll([{ name: 'name1' }, { name: 'name2' }], { name:'name1' }) // [{ name: 'name2' }]
```

**where** : ```_.where(array, element)```

Gets the index of the element

```js
_.where([1, 2, 3], 2) // 1
_.where([1, 2, 3], 4) // -1
_.where([{ name: 'name1' }, { name: 'name2' }], { name:'name1' }) // 0
```

###### Object

**isEqual** : ```_.isEqual(object1, object2)```

Gets the comparison between objects

```js
const object1 = { a:1, b:2 }
const object2 = { a:1, b:2 }
const object3 = { a:1}

_.isEqual(object1, object2) // true
_.isEqual(object1, object3) // false
```

###### Functional

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
