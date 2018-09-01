| A   |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| 4   | 2   | 3   | 5   | 1   | 7   | 6   |

setp 1 is to find the min number of the array:  
loop thought the array and assign the min number

then swap the index of the first number and the min number:

```
let min
for (let i=0;i<Array.length;i++) {
  if (min < Array[i] ) min = Array[i];
}
```

# A

| 0       | 1   | 2   | 3   | 4       | 5   | 6   |
| ------- | --- | --- | --- | ------- | --- | --- |
| **_4_** | 2   | 3   | 5   | **_1_** | 7   | 6   |

---

| 0       | 1   | 2   | 3   | 4       | 5   | 6   |
| ------- | --- | --- | --- | ------- | --- | --- |
| **_1_** | 2   | 3   | 5   | **_4_** | 7   | 6   |

```
const findSmallestIndex = (unsortedArr) => {
  let minIndex = 0;
  for ( let i=0;i<unsortedArr.length;i++){
    if( unsortedArr[minIndex] > unsortedArr[i] ){
      minIndex = i
    }
  }
  return minIndex
}
```

Now repeat and swap the looping index with the smallest index _**if `findSmallestIndex` is smaller than the current smallest**_

```
const sort = (unsortedArr) => {
  for(let i=0;i<unsortedArr.length-1;i++){
    let smallestIndex = findSmallestIndex(
      unsortedArr.slice(i+1,unsortedArr.length)
    )
    if ( unsortedArr[smallestIndex + 1 + i] < unsortedArr[i] ) {
      [ unsortedArr[i],unsortedArr[smallestIndex+i+1]] = [ unsortedArr[smallestIndex+i+1],unsortedArr[i]]
    }
  }
  return unsortedArr
}
```
should be all sorted... 
```
let testArray = [4,3,2,1,5]
sort(testArray);
=> [ 1, 2, 3, 4, 5 ]
sort([4,3,2,1,1,1,5]);
=> [ 1, 1, 1, 2, 3, 4, 5 ]
```

# O(n^2)
pretty crappy sorting.