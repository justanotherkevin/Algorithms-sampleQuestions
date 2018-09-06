# how it works

we check if the middle item is what we’re looking for. If it’s not we check if it’s higher or lower. Depending on that we change the boundaries. If our item is lower, we set the end to be equal to the middle minus 1. If it’s higher then we set the start to be equal to the middle plus one. The middle is ignored because we already know that it’s not what we’re looking for. Then we recalculate the middle — start + end divided by 2 and rounded down and go again. We repeat this until we find our item or we reach a single item which is different than ours.

```
function binarySearch(list, value) {
  // initial values for start, middle and end
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? -1 : middle
}
const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 99)) // 7 -> returns the index of the item
```
