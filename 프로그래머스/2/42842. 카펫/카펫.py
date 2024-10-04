def solution(brown, yellow):
    # 가로 길이: bw, 세로 길이: bh
    # bw = yw + 2, bh = yh + 2
    # brown + yellow = bw * bh = (yw + 2) * (yh + 2)
    # yellow = yw * yh = (bw - 2) * (bh - 2)
    # brown = bw + bw + bh + bh - 4 = 2 * bw + 2 * bh - 4
    # bw = (brown - 2 * bh + 4) // 2
    
    # 가로 길이는 세로 길이와 같거나 세로 길이보다 길다.
    for bh in range(1, brown // 2 + 1):
        bw = (brown - 2 * bh + 4) // 2
        yw, yh = bw - 2, bh - 2
        
        if yellow == yw * yh and brown + yellow == bw * bh:
            return [bw, bh]