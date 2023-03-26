function solution(n) {
    var arr = 0;
    arr = n.toString().split('').sort(function(a, b){
        return b-a;
    }).join("");
    return Number(arr);
}