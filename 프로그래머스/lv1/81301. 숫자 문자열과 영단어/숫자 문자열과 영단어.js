function solution(s) {
    var answer = s;
    var words = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    for (var i=0; i<words.length; i++){
        var nums = answer.split(words[i]);
        answer = nums.join(i);
    }

    return Number(answer);
}