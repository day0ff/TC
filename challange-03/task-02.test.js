import numberToArray from './task-02.js';

describe('NumberToArray function: ', () => {

    test('should return array (numberToArray of 0)', () => {
        expect(Array.isArray(numberToArray(0))).toBe(true);
    });

    test('should return array of numbers (numberToArray of 0)', () => {
        expect(typeof numberToArray(0)[0]).toBe("number");
    });

    test('should return [0] (numberToArray of 0)', () => {
        expect(numberToArray(0)).toEqual([0]);
    });

    test('should return [1, 2, 3, 4, 5] (numberToArray of 12345)', () => {
        expect(numberToArray(12345)).toEqual([1, 2, 3, 4, 5]);
    });
        
    test('should return [8, 9, 7] (numberToArray of 897)', () => {
        expect(numberToArray(897)).toEqual([8, 9, 7]);
    });
        
    test('should return [8, 9, 7] (numberToArray of 897)', () => {
        expect(numberToArray(897)).toEqual([8, 9, 7]);
    });

    test('should not to return delimetr (numberToArray of decimal 99.99)', () => {
        expect(numberToArray(99.99)).toEqual(expect.not.arrayContaining(['.']));
    });

    test('should return [1, 2, 3, 4, 5] (numberToArray of decimal 123.45)', () => {
        expect(numberToArray(123.45)).toEqual([1, 2, 3, 4, 5]);
    });

});