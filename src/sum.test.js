const { add, subtract, multiply, divide } = require('./sum');

describe('math operations', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtract 2 - 1 to equal 1', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    test('multiply 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divide 6 / 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });

    test('divide 6 / 0 to throw error', () => {
        expect(() => divide(6, 0)).toThrow('Division by zero is not allowed.');
    });
});
