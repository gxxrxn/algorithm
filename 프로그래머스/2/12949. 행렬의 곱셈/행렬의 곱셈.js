function solution(arr1, arr2) {
    const answer = [];
    for (let i = 0; i < arr1.length; i += 1) {
        const arr = [];
        for (let col = 0; col < arr2[0].length; col += 1) {
            arr.push(arr1[i].reduce((sum, n, i) => (sum + n*arr2[i][col]), 0));
        }
        answer.push(arr)
    }
    return answer;
}
