function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0;
  d.reduce((acc, cur) => {
    if (acc + cur <= budget) {
      answer += 1;
      return acc + cur;
    }
    return acc;
  }, 0);

  return answer;
}
