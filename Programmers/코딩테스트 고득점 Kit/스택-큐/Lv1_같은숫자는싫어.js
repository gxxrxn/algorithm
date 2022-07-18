function solution(arr) {
  const answer = [];
  let idx = 0;
  let ex = -1;

  while (idx < arr.length) {
    if (ex !== arr[idx]) answer.push(arr[idx]);
    ex = arr[idx];
    idx += 1;
  }

  return answer;
}
