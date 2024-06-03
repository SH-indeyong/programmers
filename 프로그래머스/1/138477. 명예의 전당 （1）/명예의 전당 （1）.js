function solution(k, score) {
    let ranking = [];
    let answer = [];
    
    for (let value of score) {
        // 명예의 전당 자리가 남아있는 경우
        if (ranking.length < k) {
            ranking.push(value);
        } else {
            // 현재 스코어가 명예의 전당에 존재하는 스코어보다 높은 경우
            let minIndex = ranking.indexOf(Math.min(...ranking));
            if (value > ranking[minIndex]) {
                ranking[minIndex] = value;
            }
        }
        
        let sortedRanking = [...ranking].sort((a, b) => a - b);
        answer.push(sortedRanking[0])
    }
    return answer;
}