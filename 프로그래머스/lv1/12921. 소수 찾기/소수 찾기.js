function solution(n) {
    const isPrime = new Array(n+1).fill(true);
    let count = n - 1;
    
    for (let i = 2; i < Math.sqrt(n); i += 1) {
        if (isPrime[i]) {
            for (let j = i**2; j <= n; j += i) {
                if (isPrime[j]) count -= 1;
                isPrime[j] = false;
            }
        }
    }

    return count;
}