function solution(maps) {
    const answer = [];
    const map = [...maps.map(row => [...row])];
    const visited = Array.from({length: map.length}, () => Array(map[0].length).fill(0));
    
    const DFS = (row, col) => {
        if (row < 0 || col < 0 || col >= map.length || row >= map[col].length
            || visited[col][row] || map[col][row] === 'X') {
            return 0;
        }
        
        visited[col][row] = true;
        return (map[col][row] - '0')
            + DFS(row-1, col)
            + DFS(row, col+1)
            + DFS(row+1, col)
            + DFS(row, col-1)
        ;
    }
    
    for (let col = 0; col < map.length; col += 1) {
        let sum = 0;
        
        for (let row = 0; row < map[col].length; row += 1) {
            sum = DFS(row, col);
            if (sum > 0) {
                answer.push(sum);
            }
        }
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
