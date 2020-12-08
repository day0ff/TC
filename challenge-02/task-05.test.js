import arithmeticMean from './task-05.js';

describe('ArithmeticMean function: ', () => {

    test('should return 5 (arithmeticMean of 1, 2, 3, 4, 5, 6, 7, 8, 9)', () => {
        expect(arithmeticMean(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(5);
    });

    test('should return 21 (arithmeticMean of 3, 3, 12, 77, 1, 42, 9)', () => {
        expect(arithmeticMean(3, 3, 12, 77, 1, 42, 9)).toBe(21);
    });
    
    test('should return undefined (arithmeticMean of "a", 3, null)', () => {
        expect(arithmeticMean("a", 3, null)).toBeUndefined();
    });
        
    test('should return 0 (arithmeticMean of 0, 0, 0, 0, 0)', () => {
        expect(arithmeticMean(0, 0, 0, 0, 0)).toBe(0);
    });
      
    test('should return undefined (arithmeticMean of empty arguments)', () => {
        expect(arithmeticMean()).toBeUndefined();
    });
      
    test('should return undefined (arithmeticMean of object)', () => {
        expect(arithmeticMean({})).toBeUndefined();
    });

})