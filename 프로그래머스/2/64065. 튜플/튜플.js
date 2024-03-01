function solution(s) {
    let answer = [];
    s = s.slice(2, -2).split("},{").map(str => str.split(",").map(val => Number(val)));
    s = s.sort((a, b) => a.length - b.length);
    
    s.forEach(set => {
        set.forEach(n => {
            if (!answer.includes(n)) {
                answer.push(n);
            }
        })
    })

    return answer;
}