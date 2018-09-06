<!-- https://youtu.be/i-SKeOcBwko  -->

| A   |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| 4   | 2   | 3   | 5   | 1   | 7   | 6   |

---

Separate the collection into two collections; one will be the sorted, the other will is the reminaing. As you move ele into the sorted half the sorted half grow and the unsorted half will become shorted.

| A                                 |     |     |     |     |     |     |
| --------------------------------- | --- | --- | --- | --- | --- | --- |
| <span style="color:blue">4</span> | 2   | 3   | 5   | 1   | 7   | 6   |

the <span style="color:blue">blue</span> will be the sorted collection

take the first ele of the unsorted collection, and add that into the sorted collection by moving all values in the sorted collection greater than `unsorted[0]` one position to the right.

| A                                 |                                                      |     |     |     |     |     |
| --------------------------------- | ---------------------------------------------------- | --- | --- | --- | --- | --- |
| <span style="color:blue">4</span> | <span style="color:white; background:black">2</span> | 3   | 5   | 1   | 7   | 6   |

| A                                 |                                                                       |     |     |     |     |     |
| --------------------------------- | --------------------------------------------------------------------- | --- | --- | --- | --- | --- |
| <span style="color:blue">4</span> | <span style="color:black;background:black; background:black">2</span> | 3   | 5   | 1   | 7   | 6   |

| A                                                   |                                    |     |     |     |     |     |
| --------------------------------------------------- | ---------------------------------- | --- | --- | --- | --- | --- |
| <span style="background:black;color:black">2</span> | <span style="color:blue;">4</span> | 3   | 5   | 1   | 7   | 6   |

| A                                                   |                                    |     |     |     |     |     |
| --------------------------------------------------- | ---------------------------------- | --- | --- | --- | --- | --- |
| <span style="background:black;color:white">2</span> | <span style="color:blue;">4</span> | 3   | 5   | 1   | 7   | 6   |

then just repet ya'self

| A                                   |                                    |                                                       |     |     |     |     |
| ----------------------------------- | ---------------------------------- | ----------------------------------------------------- | --- | --- | --- | --- |
| <span style="color:blue"> 2 </span> | <span style="color:blue;">4</span> | <span style="background:black;color:white"> 3 </span> | 5   | 1   | 7   | 6   |

| A                                   |                                                     |                                     |     |     |     |     |
| ----------------------------------- | --------------------------------------------------- | ----------------------------------- | --- | --- | --- | --- |
| <span style="color:blue"> 2 </span> | <span style="background:black;color:black">3</span> | <span style="color:blue"> 4 </span> | 5   | 1   | 7   | 6   |

| A                                   |                                    |                                     |     |     |     |     |
| ----------------------------------- | ---------------------------------- | ----------------------------------- | --- | --- | --- | --- |
| <span style="color:blue"> 2 </span> | <span style="color:white">3</span> | <span style="color:blue"> 4 </span> | 5   | 1   | 7   | 6   |

# TMDR; worst time O(n^2)

1. Separate into sorted and unsorted collection
2. select `unsorted[0]` compare it to sorted collection
3. move all ele greater than `unsorted[0]` one index to the right on sorted collection

# sudo code

```
insertion sort (Arr) {
  <!-- unsorted collection -->
  for ( from i = 1 to Arr.len - 1 ) {
    whiteNum = Arr[i]
    backBox = i
    <!-- compare with sorted colection  -->
    while ( blackBox > 0 && Arr[blackBox - 1] > whiteNum ) {
      <!-- move ele 1 to the rigth -->
      Arr[blackBox] = Arr[blackBox - 1]
      backBox = i - 1
    }
    <!-- set num back into blackbox -->
    Arr[blackBox] = whiteNum
  }
}
```
