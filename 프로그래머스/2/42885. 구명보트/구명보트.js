function solution(people, limit) {
    const desc = people.sort((a, b) => b - a);
    let answer = 0;
    
    for (let i = 0; i < desc.length; i += 1) {
        if (desc[i] + desc[desc.length-1] > limit) {
            answer += 1;
        } else {
            desc.pop();
            answer += 1;
        }
    }
    
    return answer;
}