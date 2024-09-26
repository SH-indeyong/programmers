function solution(board, moves) {
    var count = 0;
    var stack = [];
    
    // moves만큼 작동: moves의 요소는 열 번호가 된다.
    moves.forEach(col => {
        // 크레인의 위치에 0이 아닐 때까지, 기계의 바닥까지 행 번호를 증가한다.
        for (let row = 0; row < board.length; row++){
            var pos = board[row][col - 1];
            
            // 인형이 있는 경우
            if (pos != 0) {
                // 연속된 인형인 경우
                if (pos == stack[stack.length - 1]) {
                    stack.pop();
                    count += 2;
                } else {
                // 새로운 인형인 경우
                stack.push(pos);
                }
                board[row][col - 1] = 0;
                break;
            }
        }
    })
    
    return count;
}