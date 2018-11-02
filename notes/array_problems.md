## Asking for subarray 

finding subarr sum: 
```
def max_of_subarrays(lst, k):
    for i in range(len(lst) - k + 1):
        print(max(lst[i:i + k]))

```
This takes O(n * k) time, 

--- 
💪💪  Lets do better 

For example, the input [1, 2, 3, 4, 5, 6, 7, 8, 9] and k = 3,  
after evaluating the max of first range, since 3 is at the end, we only need to check whether 4 is greater than 3. **If it is, then we can print 4 immediately, and if it isn't, we can stick with 3.**

```
let tempMax = 0;
def max_of_subarrays(lst, k):
    



    if tempMax === 0 
      for i in range(len(lst) - k + 1): 
        tempMax = max( lst[i:i + k] )   
    


```

