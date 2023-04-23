function solution(n, arr1, arr2) {
    var answer = [];
    
    for(var i=0; i<n; i++){
        // 2진수 변환
        const map = (arr1[i] | arr2[i]).toString(2);
        // console.log(map);
        const line = [];
        // j=0; j<n; j++    ==> line[0]이 0일 때를 1로 인식하는 오류
        for(var j=map.length-n; j<map.length; j++){
            if(map[j] === '1')
                line.push('#');
            else{
                line.push(' ');
            }
        }
        // console.log(line);
        answer.push(line.join(''));
    }
    return answer;
}