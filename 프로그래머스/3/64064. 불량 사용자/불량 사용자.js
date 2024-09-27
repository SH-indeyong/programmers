function solution(user_id, banned_id) {
  const selected = Array(user_id.length).fill(false);
  // 정규식으로 일치 조건을 생성한다.
  // 점(.)은 아무 문자 하나에 대응되도록 하는 정규식 패턴
  const regex = banned_id.map(id => new RegExp(`^${id.replaceAll('*', '.')}$`));
  const set = new Set();

  const dfs = (index = 0, arr = []) => {
    if (index == banned_id.length) {
      // Set은 배열을 정렬하지 않으면 정확히 중복을 감지하지 못할 수도 있다.
      set.add(arr.sort().join(','));
    } else {
      for (let i = 0; i < user_id.length; i++) {
        // 이미 선택된 아이디인 경우 넘어감
        if (selected[i]) continue;

        if (user_id[i].match(regex[index])) {
          selected[i] = true;
          dfs(index + 1, [...arr, user_id[i]]);
          selected[i] = false;
        }
      }
    }
  };

  dfs();

  return set.size;
}