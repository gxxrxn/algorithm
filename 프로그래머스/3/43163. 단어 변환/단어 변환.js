function solution(begin, target, words) {
    const visited = Array.from({length: words.length}, () => false);
    
    const queue = [];
    queue.push([begin, 0]);
    
    while(queue.length > 0) {
        const [curWord, count] = queue.shift();
        
        for (let i = 0; i < words.length; i += 1) {
            if (getDiffCount(curWord, words[i]) === 1 && !visited[i]) {
                if (words[i] === target) {
                    return count + 1;
                }
                
                queue.push([words[i], count+1]);
                visited[i] = true
            }
        }
    }
    
    return 0;
}

const getDiffCount = (a, b) => {
    return a.split("").filter((char, idx) => (char !== b[idx])).length
}