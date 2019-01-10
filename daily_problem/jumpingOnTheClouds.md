Here is the example: 

given array, made up of 1 & 0, increment index by 1 or 2 units  
only pick value of 0   
can always traverse to the end of the array.   

```
let test = [0, 1, 0, 0, 0, 0, 1, 1, 0];

function jumping(arr) {
  let currentIndex = 0;
  let jumps = 0;
  while (currentIndex < arr.length) {
    if (arr[currentIndex] === 0) {
      if (arr[currentIndex + 1] === 0 && arr[currentIndex + 2]===0) {
        currentIndex = currentIndex + 2;
        jumps += 1;
      } else {
        if (arr[currentIndex + 1] === 0) {
          currentIndex = currentIndex + 1;
          jumps += 1;
        } else {
          currentIndex = currentIndex + 2;
          jumps += 1;
        }
      }
    }
  }
  return jumps - 1;
}
```