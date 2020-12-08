import zeroesAmount from './task-04.js';

describe('ZeroesAmount function: ', () => {
   
    test('should return 0 (zeroesAmount of [1, 2, 3])', () => {
        expect(zeroesAmount([1, 2, 3])).toBe(0);
    });
     
    test('should return 2 (zeroesAmount of [1, 0, 1, 0])', () => {
        expect(zeroesAmount([1, 0, 1, 0])).toBe(2);
    });  

    test('should return 4 (zeroesAmount of [0, 0, 1, 0, 0])', () => {
        expect(zeroesAmount([0, 0, 1, 0, 0])).toBe(4);
    });  

    test('should return 0 (zeroesAmount of [])', () => {
        expect(zeroesAmount([])).toBe(0);
    }); 

});