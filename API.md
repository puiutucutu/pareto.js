### API Reference

###### Array

**head** : ```_.head(array)```

Gets the first element of an array

```js
_.head([1, 2, 3]) // 1
```

**tail** : ```_.tail(array)```

Gets all but the first element of an array.

```js
_.tail([1, 2, 3]) // [2, 3]
```

**last** : ```_.last(array)```

Gets the last element of an array.

```js
_.last([1, 2, 3]) // 3
```

**flatten** : ```_.flatten(array)```

Flattens (recursively) an array

```js
_.flatten([1, [2, 3], 4]) // [1, 2, 3, 4]
```

**remove** : ```_.remove(array, element)```

Removes the first occurence of the element from array without modifying it

```js
_.remove([1, 2, 3], 2) // [1, 3]
_.remove([{ name: 'name1' }, { name: 'name2' }], { name:'name1' }) // [{ name: 'name2' }]
```

**indexOf** : ```_.indexOf(array, element)```

Gets the index of the element

```js
_.indexOf([1, 2, 3], 2) // 1
_.indexOf([{ name: 'name1' }, { name: 'name2' }], { name:'name1' }) // 0
```

**where** : ```_.where(array, element)```

Gets the element given some properties

```js
const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

_.where(array, { id: 1 })) // [{ id: 1, name: 'name1' }]
_.where(array, { id: 1, name: 'name1' }) // [{ id: 1, name: 'name1' }]
```

###### Object

**equals** : ```_.equals(object1, object2)```

Gets the comparison between objects

```js
_.equals({ a:1, b:2 }, { a:1, b:2 }) // true
_.equals({ a:1, b:2 }, { a:1}) // false

_.equals([1,2,3], [1,2,3]) // true
_.equals([1,2,3], [4,5,6]) // false
```

**matches** : ```_.matches(object, props)```

Get the comparison between an object and some of it's properties

```js
const object1 = { a: 1, b: 2 }

_.matches(object1, { a: 1 }) // true
_.matches(object1, { a: 1, b: 2 }) // true
_.matches(object1, { a: 3 }) // false
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

**memoize** : ```_.memoize(fn)```

Creates a function that memoizes (caches) the result

```js
let count = 0

const square = x => {
    count = count + 1
    return x * x
}

const memoSquare = _.memoize(square)

count // 0
memoSquare(10) // 100
memoSquare(10) // 100
memoSquare(10) // 100
count // 1
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
