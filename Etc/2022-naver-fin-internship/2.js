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

function solution(cities, roads, cars, customers) {
  const graph = new WeightedGraph();
  let answer = [];
  cars = cars.map((car) =>
    car.split(" ").map((val, idx) => {
      if (idx != 0) return +val;
      return val;
    })
  );

  cities.forEach((city) => graph.addVertex(city));
  roads.forEach((road) => {
    const [start, end, weight] = road.split(" ");
    graph.addEdge(start, end, +weight);
  });
  customers.forEach((customer) => {
    const [start, end, load] = customer.split(" ");

    // distance로 출발도시까지 갈 경로를 선택하고, path는 짐을 실어서 도착도시까지 가는 경로가 됨.
    const [distances, path] = graph.Dijkstra(start, end);

    // 고객의 짐 무게 이상이면서 출발지와 연결되어있는 차량(혹은 출발 도시에 있는 차량)만 filter
    const possibleCars = cars.filter(
      (car) => car[1] >= +load && distances[car[0]] != Infinity
    );

    answer.push(
      possibleCars
        .map((car) => [
          car[0],
          graph.Dijkstra(car[0], start)[0][start] * car[2] +
            distances[end] * car[2],
        ])
        .sort((a, b) => a[1] - b[1])
        .filter((car, idx, src) => car[1] === src[0][1])
        .sort((a, b) => {
          if (a[0] > b[0]) return 1;
          if (a[0] < b[0]) return -1;
          if (a[0] === b[0]) return 0;
        })
    );
  });

  return answer.map((val) => val[0][0]);
}

console.log(
  solution(
    ["a", "b", "c"],
    ["a b 1", "a c 1", "b c 1"],
    ["a 100 10", "b 300 20", "c 50 4"],
    ["a b 100", "a b 30", "c a 250"]
  )
);
console.log(
  solution(
    ["a", "b", "c", "d", "e", "f", "g"],
    ["a b 1", "a c 1", "c d 3", "b d 5", "b e 6", "d e 2", "f g 8"],
    [
      "a 100 10",
      "a 200 15",
      "b 100 5",
      "c 20 2",
      "c 300 30",
      "d 200 20",
      "e 500 100",
      "f 500 50",
      "g 100 40",
    ],
    ["g f 200", "c e 50", "d a 500", "a b 50"]
  )
);
