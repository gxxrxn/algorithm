function solution(n, k) {
  const data = n.toString(k).split("0");
  return data.filter((num) => isPrime(Number(num))).length;
}

function isPrime(number) {
  if (number <= 2) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
