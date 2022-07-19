function solution(s) {
  const m = Math.floor(s.length / 2);
  return m !== s.length / 2 ? s[m] : s[m - 1] + s[m];
}
