function solution(participant, completion) {
  const answer = {};
  participant.forEach((p) => {
    if (!answer[p]) answer[p] = 0;
    answer[p] += 1;
  });
  completion.forEach((p) => (answer[p] -= 1));

  for (let p in answer) {
    if (answer[p] === 1) return p;
  }
}
