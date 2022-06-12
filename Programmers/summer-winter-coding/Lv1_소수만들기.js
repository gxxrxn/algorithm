const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const isPrime = (num) => {
  if (num <= 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

function solution(nums) {
  let answer = getCombinations(nums, 3).reduce((acc, cur) => {
    if (isPrime(sum(cur))) return acc + 1;
    return acc;
  }, 0);

  return answer;
}
