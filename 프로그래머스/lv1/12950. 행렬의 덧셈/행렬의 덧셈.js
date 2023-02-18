function solution(arr1, arr2) {
    const arr = [];
    
    arr1.forEach((row, rowIdx)=> {
        const temp = [];
        for (let colIdx = 0; colIdx < row.length; colIdx += 1) {
            temp.push(arr1[rowIdx][colIdx] + arr2[rowIdx][colIdx])
        }
        arr.push(temp);
    })
    
    return arr;
}