const divisor = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) result.push(i);
  }
  return result;
};

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i += 1) {
    const cnt = divisor(i).length;
    if (cnt % 2 === 0) answer += i;
    else answer -= i;
  }

  return answer;
}
