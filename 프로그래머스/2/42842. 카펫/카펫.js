function solution(brown, yellow) {
    for (let i = 1; i*i <= yellow; i += 1) {
        if (yellow % i === 0) { // 약수
            const 가로 = yellow / i + 2;
            const 세로 = i + 2;
            
            if (가로*세로 - yellow === brown) {
                return [가로, 세로];
            }
        }
    }
    
    // yellow = 1
    return [3, 3];
}