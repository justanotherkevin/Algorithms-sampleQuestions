## Chapter 2

You’ll learn about two fundamental data structures: **arrays and linked lists.**  
 These data structures are used throughout the book, and they’re used to make more advanced data structures like hash tables (chapter 5).

- Array  
  Using an array means all your tasks are stored contiguously (right next to each other) in memory.

  Now suppose you want to add a fourth task. But the next drawer is taken up by someone else’s stuff!

  In this case, you need to ask your computer for a different chunk of memory that can fit four tasks. Then you need to move all your tasks there.

  If another friend comes by, you’re out of room again—and you all have to move a second time! What a pain.

- linked list  
  It’s like a treasure hunt. You go to the first address, and it says, “The next item can be found at address 123.”  
   So you go to address 123, and it says, “The next item can be found at address 847,” and so on.  
   Adding an item to a linked list is easy: you stick it anywhere in memory and store the address with the previous item.

Linked lists have a similar problem. Suppose you want to read the **last item** in a linked list. You can’t just read it, because you don’t know what address it’s at.  
Arrays are great if you want to read random elements, because you can look up any element in your array instantly. 

|  | array | linked | 
| --- | --- | ---| 
| reading | o(1) | o(n) |
| insertion | O(n) | O(1) |
| deletion | O(n) | O(1) |


Chaper shows **selection sort** this sort the list by double looping. its o(n^2) run time. go remmebre somethigns. 
