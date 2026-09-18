const {sum, greeting } = require('./utils');

test('sum - should return 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);

    expect(sum(0.1002, 0.3)).toBeCloseTo(0.4);
});

test('greeting - should return Hello name', () => {
    expect(greeting('John')).toBe('Hello John');
    expect(greeting('John')).toMatch(/Hello John/);
    expect(greeting('John')).toMatch(/^Hello John$/);
});