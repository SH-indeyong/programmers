function solution(s) {
    for(let i=0; i<s.length; i++){
        if(isNaN(s.split("")[i]) === true) return false;
    }
    return s.length === 4 || s.length === 6 ? true : false;
}