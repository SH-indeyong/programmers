function solution(numbers, hand) {
    var answer = '';
    
    // 왼손, 오른손의 현재 위치
    let [leftRow, leftCol] = [3, 0];
    let [rightRow, rightCol] = [3, 2];
    
    numbers.forEach(num => {
        // 1, 4, 7을 누를 경우: 왼손 이동
        if ((num - 1) % 3 === 0) {
            // 왼손의 행 번호 업데이트
            [leftRow, leftCol] = [Math.floor((num - 1) / 3), 0];
            answer += "L";
        }
    
        // 3, 6, 9를 누를 경우
        else if (num % 3 === 0 && num != 0) {
            // 오른손의 행 번호 업데이트
            [rightRow, rightCol] = [Math.floor((num - 1) / 3), 2];
            answer += "R";
        }

        // 2, 5, 8, 0을 누를 경우
        else {
            if (num === 0) num = 11;
            // 누를 번호의 위치
            let [nextRow, nextCol] = [Math.floor((num - 1) / 3), 1];
            // 왼손, 오른손과의 거리
            let leftDist = Math.abs(leftRow - nextRow) + Math.abs(leftCol - nextCol);
            let rightDist = Math.abs(rightRow - nextRow) + Math.abs(rightCol - nextCol);
            
            if (leftDist < rightDist || (leftDist == rightDist && hand == "left")) {
                // 왼손과의 거리가 더 가깝거나 거리가 같고 왼손잡이인 경우
                [leftRow, leftCol] = [nextRow, nextCol];
                answer += "L";
            } else {
                // 오른손과의 거리가 더 가깝거나 거리가 같고 오른손잡이인 경우
                [rightRow, rightCol] = [nextRow, nextCol];
                answer += "R";
            }
        }
    })

    return answer;
}