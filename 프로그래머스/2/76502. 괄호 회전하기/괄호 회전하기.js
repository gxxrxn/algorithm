const open = {'(': 0, '[': 1, '{': 2};
const close = {')': 0, ']': 1, '}': 2};

function solution(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length; i += 1) {
        const stack = [];
        let isCorrect = true;
        
        for (let j = i; j < i + s.length; j += 1) {
            const idx = j % s.length;
            
            if (s[idx] in open) {
                stack.push(s[idx]);
            } else {
                const prev = stack.pop();
                if (!(prev in open) || close[s[idx]] !== open[prev]) {
                    isCorrect = false;
                    break;
                }
            }
        }
        
        if (isCorrect && stack.length === 0) {
            answer += 1;
        }
    }
    
    return answer;
}