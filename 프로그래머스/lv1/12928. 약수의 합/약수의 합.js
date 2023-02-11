function solution(n) {
    if (n === 1) return 1;
    
    return getDivision(n).reduce((acc, cur) => cur + acc, 0);
}

const getDivision = (num) => {
    const divisions = new Set();
    
    for (let i = 1; i <= Math.floor(num / 2); i += 1) {
        if (num % i === 0) {
            divisions.add(i);
            divisions.add(num / i);
        }
    }
    
    return Array.from(divisions);
}
