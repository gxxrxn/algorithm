function solution(s) {
    const toBinary = (str) => str.replaceAll("0", "").length.toString(2);
    const countZero = (str) => [...str].reduce((acc, cur) => (cur === "0" ? acc+1 : acc), 0);
    const answer = [0, 0];
    
    while (s !== "1") {
        answer[1] += countZero(s);
        s = toBinary(s);
        answer[0] += 1;
    }
    
    return answer;
}