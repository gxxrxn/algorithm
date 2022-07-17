function solution(n) {
  let answer = n - 1;
  for (let x = 2; x <= n - 1; x += 1) {
    if ((n - 1) % x === 0) return x;
  }
  return answer;
}
