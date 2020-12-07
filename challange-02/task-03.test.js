import factorial from './task-03.js';

describe('Factorial function: ', () => {

    test('should retrun 0 (factorial 0!)', () => {
        expect(factorial(0)).toBe(1);
    });

    test('should retrun 1 (factorial 1!)', () => {
        expect(factorial(1)).toBe(1);
    });

    test('should retrun 2 (factorial 2!)', () => {
        expect(factorial(2)).toBe(2);
    });

    test('should retrun 6 (factorial 3!)', () => {
        expect(factorial(3)).toBe(6);
    });

    test('should retrun 5040 (factorial 7!)', () => {
        expect(factorial(7)).toBe(5040);
    });

    test('should retrun 1 (factorial string "1"!)', () => {
        expect(factorial('1')).toBe(1);
    });

    test('should retrun 720 (factorial string "6"!)', () => {
        expect(factorial('6')).toBe(720);
    });

    test('should retrun undefined (factorial string "a"!)', () => {
        expect(factorial('a')).toBeUndefined();
    });

    test('should retrun undefined (factorial -1!)', () => {
        expect(factorial(-1)).toBeUndefined();
    });

    test('should retrun undefined (factorial 2.2!)', () => {
        expect(factorial(2.2)).toBeUndefined();
    });
});