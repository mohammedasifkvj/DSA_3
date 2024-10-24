// All the method have constant time complexity 
// exept remove vertex which depends on the number edges it connected

class Graph{
    constructor(){
        this.adjacencyList={}
    }


    addVertex(vertex){
        if(! this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)  // make connection using add in-built method in set
        this.adjacencyList[vertex2].add(vertex1)
    }

    //to check is a edge is present between two vertices
    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2) &&
         this.adjacencyList[vertex2].has(vertex1) )
    }

    removeVertex(vertex){
        if(! this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){   // first remove all the edges
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    //remove edge
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)  //in-built method in set
        this.adjacencyList[vertex2].delete(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +" -> "+[...this.adjacencyList[vertex]]);
        }
    }
}


const graph=new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()
console.log(graph.hasEdge("A","C"));
console.log(graph.hasEdge("A","B"));
console.log(graph.hasEdge("C","B"));
graph.removeVertex("B")
graph.display()