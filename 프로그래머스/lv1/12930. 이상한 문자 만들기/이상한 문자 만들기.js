function solution(s) {
    let tmp = 0;
    
    return [...s].map((c, idx) => {
        if (c === " ") {
            tmp = idx + 1;
        }
        
        if ((idx - tmp) % 2) {
            return c.toLowerCase();
        } else {
            return c.toUpperCase();
        }
    }).join("");
}