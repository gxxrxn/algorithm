function solution(n) {
    return [...n+''].reverse().map(v => Number(v));
}