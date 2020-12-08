import zeroesEndCount from './task-05.js';

describe('ZeroesEndCount function: ', () => {
   
    test('should return 0 (zeroesEndCount of [1, 2, 3, 4])', () => {
        expect(zeroesEndCount([1, 2, 3, 4])).toBe(0);
    });
   
    test('should return 2 (zeroesEndCount of [2, 0, 2, 0, 0])', () => {
        expect(zeroesEndCount([2, 0, 2, 0, 0])).toBe(2);
    });
   
    test('should return 0 (zeroesEndCount of [0, 0, 0, 0, 1])', () => {
        expect(zeroesEndCount([0, 0, 0, 0, 1])).toBe(0);
    });
   
    test('should return 6 (zeroesEndCount of [0, 0, 0, 0, 0, 0])', () => {
        expect(zeroesEndCount([0, 0, 0, 0, 0, 0])).toBe(6);
    });

    test('should return 0 (zeroesEndCount of [])', () => {
        expect(zeroesEndCount([])).toBe(0);
    }); 

});