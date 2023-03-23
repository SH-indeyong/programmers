function solution(x, n) {
    var answer = [];
    for(var i=0; i<n; i++)
        answer.push(x*(1+i));
    return answer;
}