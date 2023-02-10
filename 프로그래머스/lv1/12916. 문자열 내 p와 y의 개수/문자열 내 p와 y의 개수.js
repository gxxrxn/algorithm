function solution(s){
    const result = [...s].reduce((acc, cur) => {
        cur = cur.toLowerCase();
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    return result.p === result.y;
}