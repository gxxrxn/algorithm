function solution(s)
{   
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
        const cur = s[i];
        
        if (stack.length === 0) {
            stack.push(cur);
            continue;
        }
        
        const target = stack.pop();
        
        if (target !== cur) {
            stack.push(target);
            stack.push(cur);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}