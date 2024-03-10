function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    sizes.forEach((size) => {
        const [w, h] = size;
        
        if (w > h) {
          maxW = Math.max(maxW, w);
          maxH = Math.max(maxH, h);
        } else {
          maxW = Math.max(maxW, h);
          maxH = Math.max(maxH, w);
        }
    })
    
    return maxW * maxH;
}