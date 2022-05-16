function solution(n, info) {
  // ryan[0..10] : 10-i점에서 라이언 점수
  // ryan[11] : 점수
  let ryan = Array(12).fill(-1);

  // 0~10점 과녁에서 라이언이 이길지(1), 질지(0)를 11bit로 표현
  // ex. 11000000000 -> 10점, 9점에서 라이언이 이긴다
  // 따라서 11111111111 = 2^10 개의 가능성을 확인해보면 된다
  for (let _case = 0; _case < 1024; _case++) {
    let arrow = Array(12).fill(0);
    let score = 0;
    let left = n;

    for (let p = 0; p < 10; p++) {
      // 점수 p를 의미하는 bit가 1인지 확인
      // ex. 11001000000 경우에서 7점 bit가 1인지 확인하려면
      //     00000000001 에서 1을 왼쪽으로 7번 shift한 후 & 연산을 하면 된다
      if (_case & (1 << p)) {
        score += 10 - p;
        left -= info[p] + 1;
        arrow[p] = info[p] + 1;
      } else if (info[p] != 0) {
        score -= 10 - p;
      }
    }

    if (score <= 0 || left < 0) continue;

    arrow[10] = left;
    arrow[11] = score;

    if (cmp(arrow, ryan)) {
      for (let i = 0; i < 12; i++) {
        ryan[i] = arrow[i];
      }
    }
  }

  if (ryan[0] === -1) {
    return [-1];
  }

  return ryan.slice(0, 11);
}

const cmp = (a, b) => {
  for (let i = 11; i >= 0; i--) {
    if (a[i] != b[i]) return a[i] > b[i];
  }
  return false;
};
