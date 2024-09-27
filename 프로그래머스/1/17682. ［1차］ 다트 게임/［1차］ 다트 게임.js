function solution(dartResult) {
  let score = [];
  let point = 0;

  for (let i = 0; i < dartResult.length; i++) {
    // 숫자인 경우: 점수 처리
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        point = 10;
        i++;
      } else {
        point = dartResult[i];
      }
    }

    // 보너스 문자인 경우
    else if (dartResult[i] == "S") score.push(point)
    else if (dartResult[i] == "D") score.push(point ** 2)
    else if (dartResult[i] == "T") score.push(point ** 3)

    // 옵션 기호인 경우
    else if (dartResult[i] == "*") {
      score[score.length - 1] *= 2;
      score[score.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      score[score.length - 1] *= -1;
    }
  }

  return score.map(v => +v).reduce((acc, cur) => acc + cur);
}