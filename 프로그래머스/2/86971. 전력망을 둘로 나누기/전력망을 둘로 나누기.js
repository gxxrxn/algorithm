function solution(n, wires) {
    const graph = {};
    const answer = [];
    
    // 그래프 만들기
    wires.forEach((wire, idx) => {
        const [v1, v2] = wire;
        graph[v1] = graph[v1] ? [...graph[v1], v2] : [v2];
        graph[v2] = graph[v2] ? [...graph[v2], v1] : [v1];
    });
    
    for (const wire of wires) {
        const [start, end] = wire;
        const visited = Array.from({length: n}, () => false);
        const stack = [...graph[start]];
        let count = 1;
        
        visited[start] = true;
        
        while (stack.length > 0) {
            const next = stack.pop();
            
            if (!visited[next] && next !== end) {
                stack.push(...graph[next]);
                visited[next] = true;
                count += 1;
            }
        }
        
        answer.push(Math.abs(n-2*count));
    }
    
    return Math.min(...answer);
}