function solution(n) {
    const words = ["수", "박"];
    return Array.from({length: n}).fill("").map((_, idx) => words[idx % words.length]).join("");
}