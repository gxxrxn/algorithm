const compress = (str, unit) => {
  const strData = [];
  let result = "";

  for (let i = 0; i < str.length; i += unit) {
    strData.push(str.slice(i, i + unit));
  }
  strData.push("A");

  let count = 1;
  for (let i = 0; i < strData.length - 1; i += 1) {
    if (strData[i] === strData[i + 1]) {
      count += 1;
    } else {
      result += count === 1 ? strData[i] : count + strData[i];
      count = 1;
    }
  }

  return result;
};

function solution(s) {
  if (s.length === 1) return 1;
  let answer = [];
  for (let i = 1; i < s.length; i += 1) {
    answer.push(compress(s, i).length);
  }
  return Math.min(...answer);
}
