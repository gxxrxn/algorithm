function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i += 1) {
      if (loop(0, i, n, [])) answer += 1
    }
    
    return answer;
}

const loop = (prev, next, goal, memory) => {
    memory.push(next)
    
    if (prev + next === goal) {
        return memory;
    } else if (prev + next > goal) {
        return false;
    }
    
    return loop(prev+next, next+1, goal, memory);
}