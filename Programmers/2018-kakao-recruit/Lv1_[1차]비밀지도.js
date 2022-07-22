function solution(n, arr1, arr2) {
  return arr1.reduce((acc, cur, idx) => {
    acc.push(
      (cur | arr2[idx])
        .toString(2)
        .padStart(n, "0")
        .replace(/1/g, "#")
        .replace(/0/g, " ")
    );
    return acc;
  }, []);
}
