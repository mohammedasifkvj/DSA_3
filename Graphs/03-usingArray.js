class Graph {
    constructor(size) {
        this.size = size; // Number of vertices in the graph
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
        this.vertexMap = {}; // To map vertex labels to matrix indices
        this.nextIndex = 0;
    }

    addVertex(vertex) {
        if (this.nextIndex < this.size && !(vertex in this.vertexMap)) {
            this.vertexMap[vertex] = this.nextIndex++;
        }
    }

    addEdge(vertex1, vertex2) {
        const index1 = this.vertexMap[vertex1];
        const index2 = this.vertexMap[vertex2];
        if (index1 !== undefined && index2 !== undefined) {
            this.matrix[index1][index2] = 1;
            this.matrix[index2][index1] = 1;
        }
    }

    hasEdge(vertex1, vertex2) {
        const index1 = this.vertexMap[vertex1];
        const index2 = this.vertexMap[vertex2];
        return index1 !== undefined && index2 !== undefined && this.matrix[index1][index2] === 1;
    }

    removeVertex(vertex) {
        const index = this.vertexMap[vertex];
        if (index !== undefined) {
            for (let i = 0; i < this.size; i++) {
                this.matrix[index][i] = 0; // Remove all edges from this vertex
                this.matrix[i][index] = 0;
            }
            delete this.vertexMap[vertex];
        }
    }

    removeEdge(vertex1, vertex2) {
        const index1 = this.vertexMap[vertex1];
        const index2 = this.vertexMap[vertex2];
        if (index1 !== undefined && index2 !== undefined) {
            this.matrix[index1][index2] = 0;
            this.matrix[index2][index1] = 0;
        }
    }

    display() {
        console.log("Adjacency Matrix:");
        console.log("  ", Object.keys(this.vertexMap).join(" "));
        for (let i = 0; i < this.size; i++) {
            const row = this.matrix[i].map(cell => cell ? 1 : 0).join(" ");
            console.log(Object.keys(this.vertexMap)[i] || "-", row);
        }
    }
}

const graph = new Graph(3);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "C"));
console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("C", "B"));

graph.removeVertex("B");
graph.display();
