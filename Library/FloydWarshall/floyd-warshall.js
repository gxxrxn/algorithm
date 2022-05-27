const floydWarshall = (n, nodes) => {
  const adj = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  nodes.forEach(([start, end, cost]) => {
    adj[start][end] = cost;
    adj[end][start] = cost;
  });

  for (let mid = 1; mid <= n; mid++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        if (start === end) {
          adj[start][end] = 0;
          continue;
        }

        if (adj[start][end] > adj[start][mid] + adj[mid][end]) {
          adj[start][end] = adj[start][mid] + adj[mid][end];
          adj[end][start] = adj[start][mid] + adj[mid][end];
        }
      }
    }
  }

  return adj;
};

const answer = floydWarshall(7, [
  [5, 7, 9],
  [4, 6, 4],
  [3, 6, 1],
  [3, 2, 3],
  [2, 1, 6],
]);
console.log(answer);
