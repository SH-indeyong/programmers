function solution(s){
    var p = 0;
    var y = 0;
    for(var i=0; i<s.length; i++){
        if(s[i] == "p" || s[i] == "P")
            p++;
        else if(s[i] == "y" || s[i] == "Y")
            y++;
    }
    if(p==y)
        return true;
    return false;
}
