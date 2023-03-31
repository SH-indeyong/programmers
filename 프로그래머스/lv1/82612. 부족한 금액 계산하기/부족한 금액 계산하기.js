function solution(price, money, count) {
    var pay = 0;
    for(var i=1; i<=count; i++)
        pay += price * i;
    return (pay-money > 0) ? pay-money : 0;
}