import easyUnpack from './task-03.js';

describe('EasyUnpack function: ', () => {
   
    test('should return [1, 3, 8] (easyUnpack of [1, 2, 3, 4, 5, 6, 7, 8, 9])', () => {
        expect(easyUnpack([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 8]);
    });
        
    test('should return [9, 7, 7] (easyUnpack of [9, 8, 7, 6])', () => {
        expect(easyUnpack([9, 8, 7, 6])).toEqual([9, 7, 7]);
    });
        
    test('should return [6, 7, 3] (easyUnpack of [6, 3, 7])', () => {
        expect(easyUnpack([6, 3, 7])).toEqual([6, 7, 3]);
    });

    test('should return new array [] (easyUnpack of []])', () => {
        const array = [];

        expect(array === easyUnpack(array)).toBe(false);
    });

    test('should return [1, undefined, 1] (easyUnpack of [1, 6])', () => {
        expect(easyUnpack([1, 6])).toEqual([1, undefined, 1]);
    });

    test('should return [1, undefined, undefined] (easyUnpack of [1])', () => {
        expect(easyUnpack([1])).toEqual([1, undefined, undefined]);
    });

    test('should return [undefined, undefined, undefined] (easyUnpack of [])', () => {
        expect(easyUnpack([])).toEqual([undefined, undefined, undefined]);
    });
    
});