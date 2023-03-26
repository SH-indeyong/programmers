function solution(x) {
    var sum = 0;
    sum = x.toString().split("").map(x => parseInt(x)).reduce((a, b) => a+b, 0);
    if(x%sum == 0)
        return true;
    return false;
}