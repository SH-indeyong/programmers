function solution(s) {
    let words = s.split(' ');
    
    let JadenCase = words.map(
        word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    
    return JadenCase.join(" ");
}