function solution(s) {
    var answer = '';
    var word = s.split(' ');
    for(var i=0; i<word.length; i++){
        for(var j=0; j<word[i].length; j++){
            answer = (j%2 === 0)
            ? answer + word[i][j].toUpperCase()
            : answer + word[i][j].toLowerCase();
        }
        if (i < word.length -1)
            answer += ' ';
    }
    return answer;
}