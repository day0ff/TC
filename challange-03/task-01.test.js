import reverse from './task-01.js';

describe('Reverse function: ', () => {
   
    test('should return [5, 4, 3, 2, 1] (reverse of [1, 2, 3, 4, 5])', () => {
        expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });
        
    test('should return [56, 11, 123, 7] (reverse of [7, 123, 11, 56])', () => {
        expect(reverse([7, 123, 11, 56])).toEqual([56, 11, 123, 7]);
    });
        
    test('should return [] (reverse of [])', () => {
        expect(reverse([])).toEqual([]);
    });

    test('should return new array [] (reverse of []])', () => {
        const array = [];

        expect(array === reverse(array)).toBe(false);
    });

});