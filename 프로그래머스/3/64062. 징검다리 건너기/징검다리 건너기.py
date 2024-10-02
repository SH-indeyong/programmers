def solution(stones, k):
    # 이진 탐색을 활용해야 효율성 테스트 통과 가능
    start = 1
    end = max(stones)
    mid = (start + end) // 2
    
    while start <= end:
        count = 0
        mid = (start + end) // 2
        
        for stone in stones:
            # 건널 수 없는 경우
            if (stone - mid) <= 0:
                count += 1
                # count가 k 이상인 경우 디딤돌을 mid명 만큼 건널 수 없기 때문에 end = mid - 1로 갱신
                if count >= k:
                    end = mid - 1
                    break
            # 건널 수 있는 경우 count 초기화
            else:
                count = 0
        else:
            # mid명이 모두 디딤돌을 건널 수 있는 경우 start = mid + 1로 갱신
            start = mid + 1
    return start
                