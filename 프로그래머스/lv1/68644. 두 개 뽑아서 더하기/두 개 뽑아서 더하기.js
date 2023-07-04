function solution(numbers) {
    var answer = [];
    for (var i=0; i<numbers.length; i++){
        for (var j=i+1; j<numbers.length; j++){
            var sum = numbers[i] + numbers[j];
            answer.push(sum);
            answer.sort((a, b) => a - b);            
        }
    }
    
    var result = [...new Set(answer)];
    return result;
}