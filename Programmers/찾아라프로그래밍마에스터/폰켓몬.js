function solution(nums) {
  const pocketmonType = new Set(nums).size;
  const selectNum = nums.length / 2;
  return pocketmonType > selectNum ? selectNum : pocketmonType;
}
