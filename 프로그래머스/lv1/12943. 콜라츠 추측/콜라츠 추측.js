function solution(num) {
    var count = 0;
    
    while(count<500 && num != 1){
        if(num%2 == 0){
            num /= 2;
        }else{
            num = num*3 + 1;
        }
        count++;
    }
    
    if(count == 500)
        return -1;
    return count;
}