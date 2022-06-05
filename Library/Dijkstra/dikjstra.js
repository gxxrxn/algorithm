function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const adj = Array.from({ length: n + 1 }, () => []); // 0~6 길이 7인 이차원 배열 생성

  fares.forEach((route) => {
    adj[route[0]].push({
      to: route[1],
      cost: route[2],
    });
    adj[route[1]].push({
      to: route[0],
      cost: route[2],
    });
  });

  // console.log(adj);

  const dijkstra = (start, end) => {
    const dist = Array(n + 1).fill(Infinity); // 최단 거리 저장
    const queue = [];

    dist[start] = 0; // 출발 지점
    queue.push({ to: start, cost: 0 });

    while (queue.length) {
      const { to } = queue.shift();

      adj[to].forEach((nextNode) => {
        if (dist[nextNode.to] > dist[to] + nextNode.cost) {
          dist[nextNode.to] = dist[to] + nextNode.cost;
          queue.push(nextNode);
        }
      });
    }

    return dist[end];
  };

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, dijkstra(s, i) + dijkstra(i, a) + dijkstra(i, b));
  }

  return answer;
}

solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
