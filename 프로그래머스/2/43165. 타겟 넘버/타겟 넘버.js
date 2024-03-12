function solution(numbers, target) {
    let answer = 0;
    
    const DFS = (sum, i) => {
        if (i === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        
        DFS(sum+numbers[i], i+1);
        DFS(sum-numbers[i], i+1);
    }
    
    DFS(0, 0);
    
    return answer;
}