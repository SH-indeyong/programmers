function solution(left, right) {
    var result = 0;
    var measure = 0;
    
    for(var i=left; i<=right; i++){
        for (var j=1; j<=i; j++){
            if(i%j == 0)
                measure++;
        }
        if(measure%2 == 0)
            result += i;
        else
            result -= i;
        measure=0;
    }
    return result;
}