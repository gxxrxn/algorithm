function solution(strings, n) {
    return strings.sort((a, b) => {
        if (b[n] > a[n]) return -1;
        else if (b[n] === a[n]) return a > b ? 1 : -1;
        return 1;
    });
}