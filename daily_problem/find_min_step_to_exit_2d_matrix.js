/* 
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
*/
board = [
  [false, false, false, false ],
  [true,  true,  false,  true  ],
  [false, false, false, false ],
  [false, false, false, false ]
]
function returnNeibors(board, cords) {
  let neiborCols = [];
  for ( let i=-1; i<=1; i++){
    for (let j=-1;j<=1; j++) {
      let newX = cords[0] + i;
      let newY = cords[1] + j;
      if( (i!=j && i*-1!=j ) && (newX >=0 && newY>=0) && (newX<board[0].length && newY<board.length)) {     
        if (board[newX][newY] != true ) {
          neiborCols.push([newX,newY])
        }
      }
    }
  }
  return neiborCols
}
// returnNeibors(board, [0,0])
function minExitSteps( board, start, end) {
  let queue = [{ node:start, count:0 }]
      seen  = new Set();

  while (queue.length > 0) {
    let workingNode = queue.shift()
    // console.log(workingNode.node, 'this working node')
    seen.add(workingNode.node.join(','))
    console.log(workingNode.node, end, workingNode.count)
    if (workingNode.node.join(',') === end.join(',') ) {
      return workingNode.count;
    }
    // console.log(workingNode)
    let neibors = returnNeibors(board,workingNode.node);
    // console.log(neibors, 'these neighbor')
    for ( neibor of neibors ) {
      if ( seen.has(neibor.join(',')) === false ) {

        let count = workingNode.count +1 
        queue.push({node:neibor, count})
      }
    }
  }
}


console.log(minExitSteps(board, [3,0], [0,0]))
