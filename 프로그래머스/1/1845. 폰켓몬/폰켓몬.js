function solution(nums) {
    const choice = nums.length / 2;
    const numSet = new Set(nums);
    
    return choice < numSet.size ? choice : numSet.size;
}