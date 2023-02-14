function solution(x) {
    return x % [...x+""].reduce((acc, cur) => Number(cur) + acc, 0) === 0;
}