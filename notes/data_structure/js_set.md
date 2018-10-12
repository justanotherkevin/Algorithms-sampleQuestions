## Set

The Set object lets you store **unique values** of any type, whether primitive values or object references.

```
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true
```

```
let test = new Set();
test.add(1)
  => Set(1) {1}
```

`.add(1)`  
Thanks to hash table implementation approach, add() in Set will likely take only O(1).

.delete(1)

.clear()

- `Set.prototype.add(value)`  
  Appends a new element with the given value to the Set object. Returns the Set object.

- `Set.prototype.clear()`  
  Removes all elements from the Set object.

- `Set.prototype.delete(value)`  
  Removes the element associated to the value and returns the value that `Set.prototype.has(value)` would have previously returned. `Set.prototype.has(value)` will return false afterwards.
- `Set.prototype.entries()`  
  Returns a new Iterator object that contains[value, value] for each element in the Set object, in insertion order. This is kept similar to the Map object, so that each entry has the same value for its key and value here.
  `Set.prototype.forEach(callbackFn[, thisArg])`  
  Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
- `Set.prototype.has(value)`  
  Returns a boolean asserting whether an element is present with the given value in the Set object or not.
- `Set.prototype.keys()`  
  Is the same function as the values() function and returns a new Iterator object that contains the values for each element in the Set object in insertion order.
- `Set.prototype.values()`  
  Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
- `Set.prototype[@@iterator]()`  
  Returns a new Iterator object that contains the values for each element in the Set object in insertion order.

