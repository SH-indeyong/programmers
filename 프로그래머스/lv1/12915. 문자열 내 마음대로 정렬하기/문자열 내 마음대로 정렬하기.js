function solution(strings, n) {
    // sort 메서드
    strings.sort((a,b)=>{
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;
        
        // n번째 인덱스를 비교한 결과가 같다면 a와 b를 비교
        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });
    return strings;
}