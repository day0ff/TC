import swissKnife from './task-04.js';
import {cube, dayOfWeek, factorial} from './task-04.js';

describe('SwissKnife function: ', () => {
    test('should return 3 (SwissKnife of 3 and cube function)', () => {
        expect(swissKnife(3, cube)).toBe(27);
    });

    test('should return -125 (SwissKnife of -5 and cube function)', () => {
        expect(swissKnife(-5, cube)).toBe(-125);
    });

    test('should retrun 10.648 (SwissKnife of decimal 2.2 and cube function)', () => {
        expect(swissKnife(2.2, cube)).toBeCloseTo(10.648);
    });

    test('should return 0 (SwissKnife of empty string "" and cube function)', () => {
        expect(swissKnife('', cube)).toBe(0);
    });

    test('should return undefined (SwissKnife of char "a" and cube function)', () => {
        expect(swissKnife('a', cube)).toBeUndefined();
    });

    test('should retrun "Wednesday" (SwissKnife of 3 and dayOfWeek function)', () => {
        expect(swissKnife(3, dayOfWeek)).toBe('Wednesday');
    });

    test('should retrun "Sunday" (SwissKnife of 7 and dayOfWeek function)', () => {
        expect(swissKnife(7, dayOfWeek)).toBe('Sunday');
    });  

    test('should retrun undefined (SwissKnife of 8 and dayOfWeek function)', () => {
        expect(swissKnife(8, dayOfWeek)).toBeUndefined();
    });
  
    test('should retrun undefined (SwissKnife 0 and dayOfWeek function)', () => {
        expect(swissKnife(0, dayOfWeek)).toBeUndefined();
    });
  
    test('should retrun undefined (SwissKnife of emty string "" and dayOfWeek function)', () => {
        expect(swissKnife('', dayOfWeek)).toBeUndefined();
    });  
      
    test('should retrun undefined (SwissKnife of string "a" and dayOfWeek function)', () => {
        expect(swissKnife('a', dayOfWeek)).toBeUndefined();
    });

    test('should retrun undefined (SwissKnife of decimal number 2.2 and dayOfWeek function)', () => {
        expect(swissKnife(2.2, dayOfWeek)).toBeUndefined();
    });


    test('should retrun 0 (SwissKnife of 0! and factorial function)', () => {
        expect(swissKnife(0, factorial)).toBe(1);
    });

    test('should retrun 1 (SwissKnife of 1! and factorial function)', () => {
        expect(swissKnife(1, factorial)).toBe(1);
    });

    test('should retrun 2 (SwissKnife of 2! and factorial function)', () => {
        expect(swissKnife(2, factorial)).toBe(2);
    });

    test('should retrun 5040 (SwissKnife of 7! and factorial function)', () => {
        expect(swissKnife(7, factorial)).toBe(5040);
    });

    test('should retrun 720 (SwissKnife of string "6"! and factorial function)', () => {
        expect(swissKnife('6', factorial)).toBe(720);
    });

    test('should retrun undefined (SwissKnife of string "a"! and factorial function)', () => {
        expect(swissKnife('a', factorial)).toBeUndefined();
    });

    test('should retrun undefined (SwissKnife of -1! and factorial function)', () => {
        expect(swissKnife(-1, factorial)).toBeUndefined();
    });

    test('should retrun undefined (SwissKnife of 2.2! and factorial function)', () => {
        expect(swissKnife(2.2, factorial)).toBeUndefined();
    });
})