function solution(food) {
    var string = '';
    for (let i=1; i<food.length; i++) {
        let l = Math.floor(food[i]/2);
        string += String(i).repeat(l);
        
    }
    
    return (string + '0' + string.split("").reverse().join(""));
}