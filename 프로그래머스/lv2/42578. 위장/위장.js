function solution(clothes) {
    const data = {};
    let answer = 1;
    
    clothes.forEach((cloth) => {
        data[cloth[1]] = (data[cloth[1]] ?? 0) + 1;
    })
    
    for (const value of Object.values(data)) {
        answer *= (value + 1)
    }
    
    return answer - 1;
}