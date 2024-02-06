function solution(n, words) {
    const cache = {};
    let 시작문자 = words[0][0];
    
    for (let i = 0; i < words.length; i += 1) {
        const 사람번호 = i % n + 1;
        const 사람차례 = Math.floor(i / n) + 1;
        const word = words[i];
        
        if (word.length <= 1 || word in cache) {
            return [사람번호, 사람차례];
        }
        
        const start = words[i][0];
        if (start !== 시작문자) {
            return [사람번호, 사람차례];
        }
        
        시작문자 = words[i].slice(-1);
        cache[word] = i;
    }
    
    return [0, 0];
}