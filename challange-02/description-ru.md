# Функции
1. Напишите функцию _**cube**_ которая принимает число x и возвращает его куб или **undefined** для всех других вариантов.
```javascript
function cube(x){ 
	// write code here
}
```
* Пример: 
    * x = 3; result 27;
    * x = 2; result 8;
    * x = ''; result 0;
    * x = 'a'; result **undefined**.
2. Напишите функцию _**dayOfWeek**_ которая принимает целоче число x от 1 до 7 и возвращает день недели или **undefined** для всех других вариантов.
```javascript
function dayOfWeek(x){ 
	// write code here
}
```
* Пример: 
    * x = 1; result 'Monday';
    * x = 4; result 'Thursday';
	* x = 8; result **undefined**.
3. Напишите функцию _**factorial**_ которая принимает целоче число x, а возвращает его факториал или **undefined** для всех других вариантов.
```javascript
function factorial(x){ 
	// write code here
}
```
* Пример: 
    * x = 3; result 6;
    * x = 4; result 24;
    * x = 'a'; result **undefined**.
4. :star: Напишите функцию _**swissKnife**_ которая принимает число x от 1 до 7 первым аргументом, а вторым аргументом другую функцию из первых трёх задач, вызывает её с парамтером x и возвращает рзультат выполнения этой функции.
```javascript
function swissKnife(x, callback){ // где callback это cube, dayOfWeek или factorial
	// write code here
}
```
* Пример: 
    * x = 5, dayOfWeek; result 'Friday';
    * x = 5, factorial; result 120.
5. :star: Напишите функцию которая принимает произвольно количество аргументов x1, x2, x3 ... xn, а возращает среднеарифмитическое этих всех чисел.
```javascript
function arithmeticMean(x1, x2, ... xn){
	// write code here
}
```
* Пример: 
    * x1 =3, x2=3, x3=12, x4=77, x5=1, x6=42, x7=9; result 21.
6. :star: :star: Напишите функцию _**sum**_ которая принимает целоче число x, а возвращает сумму всех его чисел [используя рекурсию](https://learn.javascript.ru/recursion).
```javascript
function sum(x){ 
	// write code here
}
```
* Пример: 
    * x = 3; result 6;
    * x = 5; result 15.