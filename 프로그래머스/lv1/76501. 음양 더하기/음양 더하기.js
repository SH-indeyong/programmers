function solution(absolutes, signs) {
    var answer = 0;
    for(var i=0; i<signs.length; i++){
        if(signs[i] == false)
            absolutes[i] = -absolutes[i]
    }
    for(var i=0; i<absolutes.length; i++){
        answer += absolutes[i];
    }
    return answer;
}