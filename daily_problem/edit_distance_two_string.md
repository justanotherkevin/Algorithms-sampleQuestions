# Problem

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

```
###########################################

# insertions, deletions, and substitutions 

test1 = '00abc'
test2 = 'abc000'

def numEditAway ( str1, str2):
  # find lognest common str, postiiton, add to begin/end ==> same length 
  # return compare num dif btw two str 
  if ( str1 == str2 ): 
    return 0 
  
  if ( len(str1) == len( str2) ): 
    count = 0 
    for i in range (len(str1)):
      # o(n) run time; n==len(str)
      if ( str1[i] != str2[i] ): 
        count +=1
    return count
  else: 
    longer = str1 if len(str1) > len(str2) else str2
    shorter = str1 if longer == str2 else str2
    longestRange = [] 
    for i in range (len(longer)):
      for j in range (len(shorter)):
        tempRange = [] 
        '00abc'
        '00abc000'
        while ( i< len(longer) and j<len(shorter) and longer[i] == shorter[j] ):
          print( i, j, longer[i], shorter[j])
          tempRange.append([i,j])
          i+=1 
          j+=1 

        longestRange = longestRange if len(longestRange) > len(tempRange) else tempRange
    if ( longestRange[0][0] < longestRange[0][1] ):
      filler = longestRange[0][1] - longestRange[0][0] * '0'
      longer = filler + longer
    else:
      filler = longestRange[0][0] - longestRange[0][1] * '0'
      shorter = filler + shorter

    return longestRange
        
  return 0

print( numEditAway(test1, test2) )
```

hello this is test
