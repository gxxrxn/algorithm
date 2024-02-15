function solution(n, left, right) {
    const answer = [];
    
    for (let i = left; i <= right; i += 1) {
        const row = Math.floor(i / n);
        const col = i % n;
        
        if (row >= col) {
            answer.push(row+1);
        } else {
            answer.push(col+1);
        }
    }
    
    return answer;
}