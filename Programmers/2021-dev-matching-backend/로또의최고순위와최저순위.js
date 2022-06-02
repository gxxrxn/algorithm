function solution(lottos, win_nums) {
  const corrects = lottos.filter((num) => win_nums.includes(num)).length;
  const zeros = lottos.filter((num) => !num).length;

  const low = !corrects ? 6 : 7 - corrects;
  const high = !(zeros + corrects) ? 6 : 7 - (zeros + corrects);

  return [high, low];
}
