-- 코드를 입력하세요
SELECT CAR_ID, 
       max(CASE WHEN '2022-10-16' <= end_date and '2022-10-16' >= start_date THEN '대여중'
        ELSE '대여 가능' END) AS 'AVAILABILITY'
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY car_id
ORDER BY car_id DESC;