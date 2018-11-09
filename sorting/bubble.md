

1. compare first two (item 1, item 2), swap if needed,
2. compare first two (item 2, item 3), swap if needed. repeat till end
  - largest will be at the end after 1 iteration. repeat step 1 and 2 


![Alt Text](https://media.giphy.com/media/fdFQlt5A45jyw/giphy.gif)

```
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]
```