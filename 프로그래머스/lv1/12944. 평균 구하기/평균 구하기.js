function solution(arr) {
    return arr.reduce((acc, cur) => cur + acc, 0) / arr.length;
}