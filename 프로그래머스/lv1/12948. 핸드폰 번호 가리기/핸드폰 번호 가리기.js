function solution(phone_number) {
    const len = phone_number.length;
    return [...phone_number].map((val, idx) => {
        if (idx + 4 < len) return "*";
        return val;
    }).join("");
}