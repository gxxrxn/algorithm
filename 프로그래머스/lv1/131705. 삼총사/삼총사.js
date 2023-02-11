function solution(number) {
    const combi = getCombinations(number, 3);
    return combi.filter((e) => (e.reduce((acc, cur) => acc + cur, 0) === 0)).length;
}

const getCombinations = (arr, num) => {
    let result = [];
    if(num === 1) return arr.map((e) => [e]);

    arr.forEach((fixed, index, origin) => {
        const rest = arr.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map((el) => [fixed, ...el]);
        result.push(...attached)
    });
    
    return result;
}