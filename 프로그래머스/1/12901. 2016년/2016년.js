function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

    let day = b
    for(let i = 0 ; i < a-1 ; i++)
        day += month[i];

    return weekDay[day % 7];
    
    // Date의 month는 인덱스로 되어있다.
    // return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}