-- 코드를 입력하세요
select I.animal_id, I.animal_type, I.name
from ANIMAL_INS I
left join ANIMAL_OUTS O on I.animal_id = O.animal_id
where I.sex_upon_intake like 'Intact%'
and (O.sex_upon_outcome like 'Spayed%' 
     or O.sex_upon_outcome like 'Neutered%');