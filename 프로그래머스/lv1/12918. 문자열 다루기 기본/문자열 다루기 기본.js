function solution(s) {
    return (s.length === 4 || s.length === 6) && s.indexOf("e") === -1 && Number.isInteger(Number(s));
}