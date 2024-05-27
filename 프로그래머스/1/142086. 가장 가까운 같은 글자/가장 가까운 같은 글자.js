function solution(s) {
    var answer = [];
    var alpha = [];
    for (let i = 0; i < s.length; i++) {
        if (!alpha.includes(s[i])) {
            alpha.push(s[i]);
            answer.push(-1);
        } else if (alpha.includes(s[i])) {
            answer.push(i - alpha.lastIndexOf(s[i]));
            alpha.push(s[i])
        }
    }
    return answer;
}