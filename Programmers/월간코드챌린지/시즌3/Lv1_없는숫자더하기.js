function solution(numbers) {
  let answer = 0;
  let idx = 0;

  numbers.sort();
  for (let i = 0; i < 10; i += 1) {
    if (numbers[idx] === i) idx += 1;
    else answer += i;
  }

  return answer ? answer : -1;
}
