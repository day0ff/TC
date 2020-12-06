import dayOfWeek from './task-02.js';

describe('DayOfWeek function: ', () => {

    test('should retrun "Monday" (day 1)', () => {
        expect(dayOfWeek(1)).toBe('Monday');
    });

    test('should retrun "Tuesday" (day 2)', () => {
        expect(dayOfWeek(2)).toBe('Tuesday');
    });
    
    test('should retrun "Wednesday" (day 3)', () => {
        expect(dayOfWeek(3)).toBe('Wednesday');
    });
    
    test('should retrun "Thursday" (day 4)', () => {
        expect(dayOfWeek(4)).toBe('Thursday');
    });
    
    test('should retrun "Friday" (day 5)', () => {
        expect(dayOfWeek(5)).toBe('Friday');
    });
    
    test('should retrun "Saturday" (day 6)', () => {
        expect(dayOfWeek(6)).toBe('Saturday');
    });
    
    test('should retrun "Sunday" (day 7)', () => {
        expect(dayOfWeek(7)).toBe('Sunday');
    });  

    test('should retrun "No Such Say" (day 8)', () => {
        expect(dayOfWeek(8)).toBe('No Such Say');
    });
  
    test('should retrun "No Such Say" (day 0)', () => {
        expect(dayOfWeek(0)).toBe('No Such Say');
    });
  
    test('should retrun "No Such Say" (day emty string "")', () => {
        expect(dayOfWeek('')).toBe('No Such Say');
    });  
      
    test('should retrun "No Such Say" (day string "a")', () => {
        expect(dayOfWeek('a')).toBe('No Such Say');
    });
})