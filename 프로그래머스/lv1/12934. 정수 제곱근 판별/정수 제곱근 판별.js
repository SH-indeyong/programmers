function solution(n) {
    for(var i=1; i<=n; i++){
        if(n == i*i)
            return Math.pow(i+1, 2);
    }
    return -1;
}