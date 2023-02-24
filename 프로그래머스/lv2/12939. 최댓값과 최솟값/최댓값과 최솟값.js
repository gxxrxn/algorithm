function solution(s) {
    const nums = s.split(" ").map(v => Number(v));
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return `${min} ${max}`;
}