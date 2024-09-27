function solution(a, b) {
    // Date의 month는 인덱스로 되어있다.
    return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}