-- 코드를 입력하세요
SELECT CONCAT("/home/grep/src/", F.board_id, '/', F.file_id, F.file_name, F.file_ext) AS 'FILE_PATH'
FROM USED_GOODS_FILE F
LEFT JOIN USED_GOODS_BOARD B ON B.board_id = F.board_id
WHERE B.views = (SELECT max(views) FROM USED_GOODS_BOARD)
ORDER BY F.file_id DESC;