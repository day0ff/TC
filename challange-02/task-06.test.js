import digitalRoot from './task-06.js';

describe('DigitalRoot function: ', () => {

    test('should return 9 (digitalRoot of 1989)', () => {
        expect(digitalRoot(1989)).toBe(9);
    });
 
    test('should return 4 (digitalRoot of string "2020")', () => {
        expect(digitalRoot('2020')).toBe(4);
    });

    test('should return 1 (digitalRoot of 9999991)', () => {
        expect(digitalRoot(9999991)).toBe(1);
    });

    test('should return 0 (digitalRoot of 0)', () => {
        expect(digitalRoot(0)).toBe(0);
    });

    test('should return undefined (digitalRoot of empty string "")', () => {
        expect(digitalRoot('')).toBeUndefined();
    });

    test('should return undefined (digitalRoot of string "XXI")', () => {
        expect(digitalRoot('XXI')).toBeUndefined();
    });

    test('should return undefined (digitalRoot of decimal number 22222.2)', () => {
        expect(digitalRoot(22222.2)).toBeUndefined();
    });

    test('should return undefined (digitalRoot of empty arguments)', () => {
        expect(digitalRoot()).toBeUndefined();
    });

});