function solution(n) {
    var rev_n = n.toString(3).split('').reverse().join('');
    return parseInt(rev_n, 3);
}