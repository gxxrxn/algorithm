function solution(n) {
    const orgOneLength = [...n.toString(2)].filter(x => x === "1").length;

    while(true) {
        n += 1;
        const nextOneLength = [...n.toString(2)].filter(x => x === "1").length;
        if (orgOneLength === nextOneLength) {
            break;    
        }
    }
    
    return n;
}