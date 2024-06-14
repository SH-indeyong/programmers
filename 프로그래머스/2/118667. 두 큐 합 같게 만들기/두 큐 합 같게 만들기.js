function solution(queue1, queue2) {
    let sum1 = 0;
    queue1.forEach(num => sum1 += num);
    let sum2 = 0;
    queue2.forEach(num => sum2 += num);
    let start = 0, end = queue1.length;
    let result = 0;    
    const limit = queue1.length * 3;
    const half = (sum1 + sum2) / 2;
    const total = [...queue1, ...queue2];
    
    while (result < limit && sum1 !== half) {
        if (sum1 < half) {
            sum1 += total[end++];
        } else {
            sum1 -= total[start++];
        }
        result++;
    }
    
    return limit === result ? -1 : result;
}