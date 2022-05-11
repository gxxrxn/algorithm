function solution(n, k) {
  const data = n.toString(k).split("0");
  return data.filter((num) => isPrime(Number(num))).length;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
