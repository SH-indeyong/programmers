function solution(n)
{
    var answer = 0;

    nString = n.toString();
    for(var i=0; i<nString.length; i++)
        answer += parseInt(nString[i]);
    
    return answer;
}