class Node {
  constructor(name, childNodes) {
    this.name = name;
    this.childNodes = childNodes;
    this.visited = false;
  }
}

// Nodes.
let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let E = new Node('E');
let F = new Node('F');
let G = new Node('G');
let H = new Node('H');

let allNodes = [A, B, C, D, E, F, G, H];

function resetNodes() {
  allNodes.forEach(node => {
    node.visited = false;
  });
}

resetNodes();

// Graph.
A.childNodes = [B, D, G];
B.childNodes = [E, F];
C.childNodes = [F, H];
D.childNodes = [A, F];
E.childNodes = [B, G];
F.childNodes = [B, C, D];
G.childNodes = [A, E];
H.childNodes = [C];


