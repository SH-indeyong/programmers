def solution(gems):
    answer = [0, len(gems)]
    gem_size = len(set(gems))
    left, right = 0, 0
    gem_dict = { gems[0] : 1 }
    
    while left < len(gems) and right < len(gems):
        # 딕셔너리에 모든 종류가 다 들어온 경우
        if len(gem_dict) == gem_size:
            # 최소 크기 확인
            if right - left < answer[1] - answer[0]:
                answer = [left, right]
            else:
                gem_dict[gems[left]] -= 1
                if gem_dict[gems[left]] == 0:
                    # 개수가 0인 항목은 del로 삭제
                    del gem_dict[gems[left]]
                left += 1
            
        else:
            right += 1

            if right == len(gems):
                break

            # 딕셔너리에 존재하면 1 증가, 없으면 항목 추가
            if gems[right] in gem_dict:
                gem_dict[gems[right]] += 1
            else:
                gem_dict[gems[right]] = 1
    
    return [answer[0]+1, answer[1]+1]