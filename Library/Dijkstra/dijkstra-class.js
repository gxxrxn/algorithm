class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    nodes.enqueue(start, 0);

    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    console.log(this.adjacencyList);

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
    }

    while (true) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      } else {
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return [distances, path.concat(smallest).reverse()];
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
