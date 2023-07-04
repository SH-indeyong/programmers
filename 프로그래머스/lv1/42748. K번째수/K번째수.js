function solution(array, commands) {
    var answer = [];
    var s = [];

    for (var i=0; i<commands.length; i++){
        s = array.slice(commands[i][0] - 1, commands[i][1])
        answer.push(s.sort((a, b) => a-b)[commands[i][2] - 1]);
    }
    return answer;
}