function solution(food) {
    let answer = "";
    for (let i = 1; i < food.length; i += 1) {
        for (let j = 0; j < Math.floor(food[i] / 2); j += 1) {
            answer += i;
        }
    }
    const reversed = answer.split("").reverse().join("");
    answer += "0"
    answer += reversed;

    return answer;
}