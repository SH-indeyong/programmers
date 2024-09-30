from collections import deque

def solution(cacheSize, cities):
    answer = 0
    buffer = deque()
    
    # 캐시 크기가 0인 경우
    if cacheSize == 0:
        return len(cities) * 5
    
    for city in cities:
        city = city.lower()         # 대소문자 구분하지 않음
        
        # 실행시간
        if city in buffer: answer += 1
        else: answer += 5
        
        if city in buffer:
            buffer.remove(city)     # 오래된 city 값을 삭제하여 최신화
        else:
            if len(buffer) >= cacheSize:
                buffer.popleft()
        
        buffer.append(city)
    return answer