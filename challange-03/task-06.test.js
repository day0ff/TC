import numberFilter from './task-06.js';

describe('NumberFilter function: ', () => {
   
    test('should return [] (numberFilter of ["Hello", "World", "!"])', () => {
        expect(numberFilter(["Hello", "World", "!"])).toEqual([]);
    });
   
    test('should return [0, 6] (numberFilter of ["array", [], "length of", 0, 6])', () => {
        expect(numberFilter(["array", [], "length of", 0, 6])).toEqual([0, 6]);
    });
   
    test('should return [0, 1, 1] (numberFilter of [undefined, 0, "0", 1, "", 1, null])', () => {
        expect(numberFilter([undefined, 0, "0", 1, "", 1, null])).toEqual([0, 1, 1]);
    });

    test('should return [] (numberFilter of [{}])', () => {
        expect(numberFilter([{}])).toEqual([]);
    });

    test('should return [] (numberFilter of empty array [])', () => {
        expect(numberFilter([])).toEqual([]);
    });

    test('should return new array [] (numberFilter of []])', () => {
        const array = [];

        expect(array === numberFilter(array)).toBe(false);
    });
    
});