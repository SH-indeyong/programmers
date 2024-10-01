from collections import deque

def bfs(room):
  p = []

  for i in range(5):
    for j in range(5):
      if room[i][j] == 'P':
        p.append([i, j])
  
  for pos in p:
    queue = deque([pos])    # 큐에 초기값
    visited = [[0] * 5 for i in range(5)]
    distance = [[0] * 5 for i in range(5)]
    visited[pos[0]][pos[1]] = 1

    while queue:
      i, j = queue.popleft()
      di = [-1, 0, 1, 0]
      dj = [0, -1, 0, 1]

      for dr in range(4):
        ni = i + di[dr]
        nj = j + dj[dr]

        if 0 <= ni and ni < 5 and 0 <= nj and nj < 5 and visited[ni][nj] == 0:
          if room[ni][nj] == 'O':
            queue.append([ni, nj])
            visited[ni][nj] = 1
            distance[ni][nj] = distance[i][j] + 1

          if room[ni][nj] == 'P' and distance[i][j] <= 1:
            return 0
  return 1        
  
def solution(places):
  answer = []
    
  for room in places:
    answer.append(bfs(room))
        
  return answer