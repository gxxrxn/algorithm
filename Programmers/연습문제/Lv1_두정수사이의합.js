function solution(a, b) {
  let answer = 0;

  for (let x = Math.min(a, b); x <= Math.max(a, b); x += 1) {
    answer += x;
  }

  return answer;
}
