function solution(s){
    var counter = 0;

    if (s[0] === ')') return false;
    if (s[s.length - 1] === '(') return false;
    
    for (let i = 0; i < s.length; i++) {        
        if (s[i] === '(') { counter++; }
        else { counter--; }
        
        if (counter < 0) return false;
    }
     
    return counter === 0 ? true : false;
}