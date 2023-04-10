function solution(s, n) {
    var answer = '';
    for(var i=0; i<s.length; i++){
        var ascii = s.charCodeAt(i);
        if(ascii === 32)
            answer += ' ';
        else if(ascii >= 65 && ascii <= 90 ){
            ascii += n;
            if(ascii > 90 && ascii < 116)
                ascii-= 26;
            answer += String.fromCharCode(ascii);
        }else{
            ascii += n;
            if (ascii > 122)
                ascii -= 26;
            answer += String.fromCharCode(ascii);
        }
    }
    return answer;
}