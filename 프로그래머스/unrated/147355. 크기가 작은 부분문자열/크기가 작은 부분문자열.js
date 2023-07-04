function solution(t, p) {
    var answer = 0;
    var num = 0;
    // p의 길이
    // t를 p의 길이만큼 잘라서 비교 answer++
    
    var length = p.toString().length;
    for (var i=0; i<t.length - length + 1; i++){
        num = t.substr(i, length);
        if(num <= p)
            answer++;
    }
    return answer;
}