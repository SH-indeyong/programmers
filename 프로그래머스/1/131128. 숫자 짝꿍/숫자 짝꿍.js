function solution(X, Y) {
  let answer = "";
  let arrX = X.split("");
  let arrY = Y.split("");

  for (let i = 0; i <= 9; i++) {
    const countX = arrX.filter(x => Number(x) == i).length;
    const countY = arrY.filter(y => Number(y) == i).length;
    answer += String(i).repeat(Math.min(countX, countY));
  }

  if (answer == "") return "-1"
  if (Number(answer) == 0) return "0"
  return answer.split("").sort((a, b) => b - a).join("");
}