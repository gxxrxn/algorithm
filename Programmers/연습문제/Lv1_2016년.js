function solution(a, b) {
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const days = Array.from(Array(a).keys())
    .map((x) => month[x])
    .reduce((acc, cur) => cur + acc, 0);
  return date[(days + b) % 7];
}
