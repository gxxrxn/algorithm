function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return Array.from(answer).sort((a, b) => a - b);
}
