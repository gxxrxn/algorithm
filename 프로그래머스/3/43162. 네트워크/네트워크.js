function solution(n, computers) {
    let answer = 0;
    const visited = Array.from({length: n}, () => false);
    
    const DFS = (i) => {
        visited[i] = true;
        
        for (let j = 0; j < n; j += 1) {
            if (computers[i][j] && !visited[j]) {
                DFS(j);
            }
        }
    }
    
    for (let i = 0; i < n; i += 1) {
        if (!visited[i]) {
            DFS(i);   
            answer += 1;
        }
    }
    
    return answer;
}