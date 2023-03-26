function solution(arr) {
    var answer = arr.filter((val, idx, arr) => arr[idx] != Math.min(...arr))
    return (answer == "") ? [-1] : answer;
}