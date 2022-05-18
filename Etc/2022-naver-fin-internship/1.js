function solution(recruits, s1, s2) {
  const maxCareer = Math.max(...recruits.map((score) => score[0]));
  const minCareer = Math.min(...recruits.map((score) => score[0]));
  const maxTest = Math.max(...recruits.map((score) => score[1]));
  const minTest = Math.min(...recruits.map((score) => score[1]));
  let answer = [];

  for (let e1 = maxCareer; e1 >= minCareer; e1--) {
    for (let e2 = maxTest; e2 >= minTest; e2--) {
      let data = recruits.map((score) => {
        const [career, test] = score;

        if (career >= e1 && test >= e2) return "Expert";
        else if (career >= s1 || test >= s2) return "Senior";
        else return "Junior";
      });

      const expertCnt = data.filter((tag) => tag === "Expert").length;
      const seniorCnt = data.filter((tag) => tag === "Senior").length;
      const juniorCnt = data.filter((tag) => tag === "Junior").length;

      if (expertCnt > 0 && expertCnt < seniorCnt && seniorCnt < juniorCnt) {
        answer.push([e1, e2]);
      }
    }
  }

  return answer.sort((a, b) => b[0] + b[1] - (a[0] + a[1]))[0];
}

console.log(
  solution(
    [
      [1, 50],
      [1, 60],
      [3, 70],
      [0, 65],
      [2, 50],
      [1, 90],
    ],
    2,
    70
  )
);

console.log(
  solution(
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 3],
      [1, 2],
      [2, 0],
      [2, 0],
      [2, 1],
    ],
    2,
    4
  )
);

console.log(
  solution(
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [2, 0],
      [0, 2],
      [1, 1],
    ],
    2,
    2
  )
);

console.log(
  solution(
    [
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 3],
      [3, 2],
    ],
    2,
    3
  )
);
