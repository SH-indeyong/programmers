function solution(name, yearning, photo) {
    let answer = [];
    for (let i=0; i<photo.length; i++) {
        let sum = 0;
        for (const n of photo[i]) {
            if (name.includes(n)) {
                sum += yearning[name.indexOf(n)]
            }
        }
        answer.push(sum);
    }
    return answer;
}