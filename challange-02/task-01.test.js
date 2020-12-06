import cube from './task-01.js';

describe('Cube function: ', () => {
    test('should return 27 (cube of 3)', () => {
        expect(cube(3)).toBe(27);
    });

    test('should return 343 (cube of 7)', () => {
        expect(cube(7)).toBe(343);
    });

    test('should return NaN (cube of char "a")', () => {
        expect(cube('a')).toBeNaN();
    });

    test('should return 0 (cube of empty string "")', () => {
        expect(cube('')).toBe(0);
    });

    test('should return 64 (cube of string "4")', () => {
        expect(cube('4')).toBe(64);
    });

    test('should return -1 (cube of -1)', () => {
        expect(cube(-1)).toBe(-1);
    });

    test('should return -125 (cube of -5)', () => {
        expect(cube(-5)).toBe(-125);
    });
})