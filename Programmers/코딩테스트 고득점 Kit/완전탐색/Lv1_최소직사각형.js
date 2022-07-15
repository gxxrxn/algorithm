function solution(sizes) {
  const result = sizes.reduce((acc, [w, h]) => {
      if (w > h) {
          acc[0].push(w);
          acc[1].push(h);
      }
      else {
          acc[0].push(h);
          acc[1].push(w)
      }
      return acc;
  }, [[], []]);
  
  return Math.max(...result[0]) * Math.max(...result[1]);
}