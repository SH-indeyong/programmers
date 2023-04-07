function solution(d, budget) {
    var count = 0;
    var pay = 0;
    d.sort((a, b) => a-b);
    for(var i=0; i<d.length; i++){
        pay += d[i];
        if(pay > budget)
            break;
        count++;
    }
    return count;
}