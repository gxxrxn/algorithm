function solution(s) {
    return s.split(" ").map(word => {
        return [...word].map((c, idx) => {
            if (idx === 0) return c.toUpperCase();
            return c.toLowerCase();
        }).join("");
    }).join(" ");
}