def solution(expression):
    answer = []
    operations = [('+', '-', '*'), ('+', '*', '-'), ('-', '*', '+'), 
                  ('-', '+', '*'), ('*', '+', '-'), ('*', '-', '+')]
    
    for op in operations:
        first = op[0]       # 우선순위 1
        second = op[1]      # 우선순위 2
        cal_list = []
        
        # 우선순위가 1인 연산자로 나누기
        for e in expression.split(first):
            # 우선순위가 2인 연산자로 나누고 괄호 씌우기
            temp = [f"({i})" for i in e.split(second)]
            # 우선순위가 2인 연산자로 다시 연결
            cal_list.append(f"({second.join(temp)})")
        
        answer.append(abs(eval(first.join(cal_list))))
            
    return max(answer)