function solution(s) {
    let num = 0;
    let zero = 0;
    
    while (s !== '1') {
        let one = s.split('1').length - 1;
        zero += s.split('0').length - 1;
        s = one.toString(2);
        num += 1;
    }
    
    return [num, zero];
}