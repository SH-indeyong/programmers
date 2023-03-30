function solution(n) {
    var answer = '';
    var odd = '수';
    var even = '박';
    for (var i=1; i<=n; i++){
        if(i%2 == 0)
            answer = answer.concat(even);
        else
            answer = answer.concat(odd);
    }
    return answer;
}