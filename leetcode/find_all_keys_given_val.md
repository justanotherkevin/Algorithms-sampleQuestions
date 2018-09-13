```
const object = {
	a:2,
	b:2,
	c: {
		d: 3,
		e: 4,
		f: {
			g: 5,
			h: 2,
		}
	},
}
```

given example object, find all key with value 2.

# Recursive solution

```
const findValues = (object, value,keys = []) => {
	for (let key in object) {
		if (typeof object[key] === 'object') {
			findValues(object[key], value, keys)
		} else if(object[key] === value) {
			keys.push(key)
		}
	}

	return keys
}
```
