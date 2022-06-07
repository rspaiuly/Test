# Задания «SQL»

Для решения задач вам потребуется перейти по ссылке https://sql-academy.org/ru/sandbox. 
Там вы будете выполнять все запросы для теста. По ссылке будет доступна схема `Air travels`, в которой есть
4 таблицы: `TRIP`, `PASS_IN_TRIP`, `PASSENGER`, `COMPANY`. Ответы (SQL запросы) будет необходимо сохранить в этом файле `README`
после каждого задания.

### Задание 1.

C помощью SELECT выведите всех пассажиров, которые летят на самолете `Boeing` от компании `air_France`.
Обязательные поля для вывода: ID пассажира, Имя пассажира как `PASSENGER_NAME`, Название самолета и название компании
как `COMPANY_NAME`.

SELECT Passenger.id, 
       Passenger.name AS PASSENGER_NAME,
       Trip.plane,
       Company.name AS COMPANY_NAME
  FROM Pass_in_trip
  LEFT JOIN Trip
  ON Pass_in_trip.trip = Trip.id
  LEFT JOIN Company
  ON Trip.company = Company.id
  LEFT JOIN Passenger
  ON Pass_in_trip.passenger = Passenger.id
WHERE Trip.plane = 'Boeing'
  AND Company.name = 'air_France'

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 1 ЗАДАНИЯ ЗДЕСЬ -->

### Задание 2.

C помощью SELECT выведите количество пассажиров относительно каждого полета(`Pass_in_trip.trip`).
Отсортируйте записи относительно количество пассажиров в порядке убывания(от большего к меньшему).
Обязательные поля для вывода: Номер полета и Количество пассажиров.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 2 ЗАДАНИЯ ЗДЕСЬ -->

select Trip.id, COUNT(Pass_in_trip.passenger ) AS passenger 
  from Pass_in_trip
  LEFT JOIN Trip
  ON Pass_in_trip.trip = Trip.id 
 where 1 = 1
 GROUP BY Trip.id 
 ORDER BY passenger desc 


### Задание 3.

С помощью SELECT выведите количество всех пассажиров из таблицы PASSENGER, имена которых начинаются с одной и той же буквы.
Отсортируйте записи по убыванию(от большего к меньшему) относительно количества пассажиров. Показывать только те записи,
где количество больше 1. Обязательные поля для вывода: `FIRST_CHAR`(Первая буква имени) 
и `COUNT` (Количество пассажиров, имена которых начинаются с этой буквы).

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 3 ЗАДАНИЯ ЗДЕСЬ -->
select a1.first_char, COUNT(a1.first_char) as COUNT
  from
(SELECT LEFT(name, 1) as first_char
  FROM  Passenger) as a1
 where 1 = 1
 GROUP BY a1.first_char
 HAVING COUNT > 1

<!-- После выполнения всех заданий, необходимо сделать push в репозиторий и отправить ссылку на него -->
