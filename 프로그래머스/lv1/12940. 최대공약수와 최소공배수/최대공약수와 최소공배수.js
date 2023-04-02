function solution(n, m) {
    var answer = [];
    var num = (n>m) ? n : m;    
    for(var i=1; i<=num; i++){
        if(n%i==0 && m%i==0)
            answer[0] = i;
    }
    answer[1] = n * m / answer[0]
    return answer;
}