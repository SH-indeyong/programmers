function solution(N, stages) {
  let arr = new Array(N).fill(0);

  for (let i = 1; i <= N; i++) {
    let [fail, not_clear, in_stage] = [0, 0, 0];

    for (let s of stages) {
      let stage = Number(s);
      if (stage == i) {
        not_clear++;
        in_stage++;
      } else if (stage > i) {
        in_stage++;
      }
    }

    fail = not_clear / in_stage;
    arr[i - 1] = fail;
  }

  return arr
    .map((value, index) => [index + 1, value])
    .sort((a, b) => b[1] - a[1])
    .map(([index, _]) => index);
};