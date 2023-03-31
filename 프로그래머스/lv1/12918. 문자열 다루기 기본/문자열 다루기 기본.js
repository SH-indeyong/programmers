function solution(s) {
    for(let i=0; i<s.length; i++){
        if(isNaN(s.split("")[i])) return false;
    }
    return s.length === 4 || s.length === 6 ? true : false;
}