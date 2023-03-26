function solution(phone) {
    var star = phone.slice(0, phone.length-4).replace(/[0-9]/g, '*')
    var back = phone.slice(phone.length-4, phone.length);
    return star+back;
}