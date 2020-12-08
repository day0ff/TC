# Массивы
1. Написать функцию _**reverse**_ которая принимает произвольной длины массив чисел, а возвращает **новый** массив в обратном порядке.
```javascript
function reverse(arr: number[]): number[] {
	// write code here
}
```
* Пример: 
    * arr = [1, 2, 3, 4, 5]; result [5, 4, 3, 2, 1]
    * arr = [7, 123, 11, 56]; result [56, 11, 123, 7];
    * arr = []; result [];
2. :star: Написать функцию _**numberToArray**_ которая принимает число, а возвращает массив из цифр этого числа.
```javascript
function numberToArray(value: number): number[] {
	// write code here
}
```
* Пример:
    * value = 12345; result [1, 2, 3, 4, 5];
    * value = 0; result [0];
    * value = 897; result [8, 9, 7];
    * value = 123.45; result [1, 2, 3, 4, 5].
3. Написать функцию _**easyUnpack**__ которая принимает произвольной длины массив чисел, а возвращает **новый** массив длиною три. Где первый элемент нового массива это первый элемент исходного массива, второй элемент это третий, а третий элемент это предпоследний.
```javascript
function easyUnpack(arr: number[]): number[] {
	// write code here
}
```
* Пример:
    * arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; result [1, 3, 8];
    * arr = [1, 1, 1, 1]; result [1, 1, 1];
    * arr = [9, 8, 7, 6]; result [9, 7, 7];
    * arr = [6, 3, 7]; result [6, 7, 3];
    * arr = [1, 6]; result [1, undefined, 1];
    * arr = [1]; result [1, undefined, undefined];
    * arr = []; result [undefined, undefined, undefined].
4. Написать функцию _**zeroesAmount**__ которая принимает произвольной длины массив чисел, а возвращает количество нулей содержащихся в этом массиве.
```javascript
function zeroesAmount(arr: number[]): number {
	// write code here
}
```
* Пример:
    * arr = [1, 2, 3]; result 0;
    * arr = [1, 0, 1, 0]; result 2;
    * arr = [0, 0, 1, 0, 0]; result 4;
    * arr = []; result 0.
5. Написать функцию _**zeroesEndCount**_ которая принимает произвольной длины массив чисел, а возвращает количество нулей содержащихся в **конце** этого массива.
```javascript
function zeroesEndCount(arr: number[]): number {
	// write code here
}
```
* Пример:
    * arr = [1, 2, 3, 4, 5]; result 0;
    * arr = [1, 0, 1, 0, 0]; result 2;
    * arr = [0, 0, 1, 0, 1]; result 0;
    * arr = [0, 0, 0, 0, 0]; result 5;
    * arr = []; result 0.
6. Написать функцию которая принимает произвольной длины массив произвольных данных, а возвращает **новый** отфильтрованный массив чисел.
```javascript
function numberFilter(values: arr[]): number[]{
	// write code here
}
```
* Пример:
    * arr = ['Hello', 1, 'World!']; result [1];
    * arr = ['array', [], 'length of', 5, 5]; result [5, 5];
    * arr = [undefined, 0, 0, 1, '', 1, null]; result [0, 0, 1, 1];
    * arr = [{}]; result [];
