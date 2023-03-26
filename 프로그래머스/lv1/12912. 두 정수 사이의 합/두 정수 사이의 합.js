function solution(a, b) {
    var sum = 0;
    if(a<=b){
        for (var i=a; i<=b; i++){
            sum += i;
        }
    }
    else{
        for (var i=a; i>=b; i--){
            sum += i;
        }
    }
    return sum;
}