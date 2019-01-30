const maxSumIncreasingSubsequence = ary => {
  // bottom up approuch
  /*
    build up as from bottom up. 
    1. copy ary then build on that. 
    2. iterate over ary and compare num to previous num from ary

  */
  const bottomUp = (aryCopy, oriAry) => {
    let indexMap = oriAry.map(() => null);
    oriAry.forEach((num, i) => {
      if (i != 0) {
        let workingNum = oriAry[i];
        for (let j = 0; j < i; j++) {
          let compareNum = oriAry[j];
          if (compareNum < workingNum && aryCopy[i] < workingNum + compareNum) {
            aryCopy[i] = workingNum + compareNum;
            indexMap[i] = j;
          }
        }
      }
    });
    return [aryCopy, indexMap];
  };
  const getMaxValMadeFrom = (thisIndex, ary, oriAry) => {
    let compAry = [];
    while (ary[thisIndex] != null) {
      compAry.push(oriAry[thisIndex]);
      thisIndex = ary[thisIndex];
    }
    compAry.push(oriAry[thisIndex]);
    return compAry;
  };

  let res = bottomUp([...ary], ary),
    maxVal = Math.max(...res[0]),
    maxIndex = res[0].indexOf(maxVal),
    maxValMadeOf = getMaxValMadeFrom(maxIndex, res[1], ary);
  console.log([maxVal, maxValMadeOf]);
  return [maxVal, maxValMadeOf];
};

let test = [8, 12, 2, 3, 15, 5, 7];
maxSumIncreasingSubsequence(test);
