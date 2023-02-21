function solution(weights) {
    const pair = {}
    const getCount = (w) => pair[w] ?? 0;
    let answer = 0;
    
    weights.forEach(w => {
        answer += getCount(w) + getCount(w*2) + getCount(w/2) + getCount((w*2)/3) + getCount((w*3)/2) + getCount((w*4)/3)+ getCount((w*3)/4);
        pair[w] = (pair[w] ?? 0) + 1;
    });
    
    return answer;
}