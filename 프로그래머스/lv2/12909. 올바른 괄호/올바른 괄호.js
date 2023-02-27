function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
      
    if (stack.length == 0) {
      stack.push(cur);
    } else {
      stack.push(cur);
      if (stack[stack.length - 2] == "(" && stack[stack.length - 1] == ")") {
        stack.pop();
        stack.pop();
      }
    }
  }

  return stack.length == 0 ? true : false;
}