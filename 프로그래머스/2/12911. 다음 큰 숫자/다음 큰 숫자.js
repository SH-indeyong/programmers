function solution(n) {
    let count = n.toString(2).split('').filter(one => one === '1').length;
    let next_count = 0;
    while (count !== next_count) {
        n++;
        next_count = n.toString(2).split('').filter(one => one === '1').length;
    }
    return n;
}