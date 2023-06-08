-- 코드를 입력하세요
SELECT month(start_date) AS 'MONTH', CAR_ID, count(history_id) AS 'RECORDS'
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE month(start_date) BETWEEN 8 AND 10
AND car_id in (
    SELECT car_id
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE month(start_date) BETWEEN 8 AND 10
    GROUP BY car_id
    HAVING count(*) >= 5)
group by MONTH, car_id
having RECORDS > 0
order by MONTH ASC, car_id DESC;