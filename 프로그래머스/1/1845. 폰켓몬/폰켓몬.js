function solution(nums) {
    const types = [];
    
    nums.forEach(function(num) {
        if (!(types.includes(num))) {
            types.push(num);
        }
    })
    
    const choice = nums.length / 2;
    return choice < types.length ? choice : types.length;
}