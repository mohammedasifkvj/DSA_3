
const matrix=[
    [0,1,0],  // A is connected to B 
    [1,0,1],  // B is connected to A and C
    [0,1,0]   // C is connected to B
]

console.log(matrix[0][1]);
console.log(matrix[1][1]);


adjacencyList={
    'A':['B'],
    'B':['A', 'C'],
    'C':['B']
}

console.log(adjacencyList['A']);
console.log(adjacencyList['B']);
console.log(adjacencyList['C']);