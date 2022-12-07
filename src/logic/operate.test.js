import operate from './operate';

test('two plus two is four', () => {
  expect(operate(2, 2, '+')).toBe('4');
});

test('4 minus two is two', () => {
  expect(operate(4, 2, '-')).toBe('2');
});

test('Border condition: invalid operator', () => {
  expect(() => operate(4, 2, '$')).toThrow(Error);
});
