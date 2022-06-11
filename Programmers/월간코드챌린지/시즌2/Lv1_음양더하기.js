function solution(absolutes, signs) {
  return signs.reduce((acc, cur, idx) => {
    return (cur ? absolutes[idx] : -absolutes[idx]) + acc;
  }, 0);
}
