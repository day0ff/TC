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
4. :star: Напишите функцию _**swissKnife**_ которая принимает число x от 1 до 7 первым аргументом, а вторым аргументом другую функцию из первых трёх задач, вызывает её с парамтером x и возвращает рзультат выполнения этой функции или **undefined** для всех других вариантов.
```javascript
function swissKnife(x, callback){ // где callback это cube, dayOfWeek или factorial
	// write code here
}
```
* Пример:
    * x = 5, callback = cube; result 125;
    * x = 5, callback = dayOfWeek; result 'Friday';
    * x = 5, callback = factorial; result 120.
    * x = 5, callback = undefined; result **undefined**.
5. :star: Напишите функцию которая принимает произвольно количество аргументов x1, x2, x3 ... xn, а возращает среднеарифмитическое этих всех чисел или **undefined** для всех других вариантов.
```javascript
function arithmeticMean(){
	// write code here
}
```
* Пример: 
    * x1 = 3, x2 = 3, x3 = 12, x4 = 77, x5 = 1, x6 = 42, x7 = 9; result 21;
    * x1 = 'a', x2 = 2.2, x3 = 3; result **undefined**;
    * result **undefined**;
6. :star: :star: Напишите функцию _**digitalRoot**_ которая принимает целоче число x, а возвращает его [цифровой корень](https://www.e-olymp.com/ru/problems/3937) [используя рекурсию](https://learn.javascript.ru/recursion) или **undefined** для всех других вариантов.
```javascript
function digitalRoot(x){ 
	// write code here
}
```
* Пример: 
    * x = 1989; result 9;
    * x = 2020; result 4;
    * x = 9999991; result 1;
    * x = 'XXI'; result **undefined**.