## find common elements

a = [1, 3, 4, 6, 7, 9]  
b = [1, 2, 4, 5, 9, 10]

bc its sorted...  
pointerA = 0  
pointerB = 0  
results = []

loop through longer array or
while pointerA < arrA.length && pointerB < arrB..length
find if arrA[pointerA] === arrB[pointerB]
add arrA[pointerA], pointerA +=1, pointerB +=1

while iterating, if arrA[pointerA] > arrB[pointerB] pointerB += 1

- because arr is sorterd,

run time it will be O(a + b)
space used O(3)

https://repl.it/@hissho/commonelementstwoarray
