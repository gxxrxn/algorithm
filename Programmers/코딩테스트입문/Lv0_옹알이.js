function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (let word of babbling) {
    let splited = [""];
    let len = 0;
    let continueous = false;

    for (let i = 0; i < word.length; i += 1) {
      splited[len] += word[i];
      if (words.find((x) => x === splited[len])) {
        if (len !== 0) {
          if (splited[len] === splited[len - 1]) {
            continueous = true;
          }
        }
        splited.push("");
        len += 1;
      }
    }

    if (splited[len] === "" && !continueous) {
      answer += 1;
    }
  }

  return answer;
}
