// import renderer from 'react-test-renderer';
import calculate from '../logic/calculate';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

it('will return 0 every time', () => {
  const test1 = calculate({
    total: 100,
    next: 10,
    operation: 'AC',
  }, 'AC');

  expect(test1).toMatchSnapshot({
    total: 0,
    next: null,
    operation: null,
  });
});

it('buttonname and obj.next === 0', () => {
  const test1 = calculate({
    total: 100,
    next: 0,
    operation: 0,
  }, '0');

  expect(test1).toMatchSnapshot({});
});

it('If there is no operation, update next and clear the value', () => {
  const test3 = calculate({
    total: null,
    next: '1',
    operation: null,
  }, '2');

  expect(test3).toEqual({ next: '12', total: null });
});

it('If there is an operation, update next', () => {
  const test3 = calculate({
    total: null,
    next: '1',
    operation: '+',
  }, '2');

  expect(test3).toMatchSnapshot({ total: null, next: '12', operation: '+' });
});

it('will return decimal 0.', () => {
  const test1 = calculate({
    total: 0,
    next: 0,
    operation: null,
  }, '.');

  expect(test1).toMatchSnapshot({ total: 0, next: '0.', operation: null });
});

it('If operator is +/- and next', () => {
  const test1 = calculate({
    total: 1000,
    next: 30,
    operation: null,
  }, '+/-');

  expect(test1).toMatchSnapshot({ total: 1000, next: '-30', operation: null });
});

it('If operator is +/- no next and total', () => {
  const test1 = calculate({
    total: 1000,
    next: null,
    operation: null,
  }, '+/-');

  expect(test1).toMatchSnapshot({ total: '-1000', next: null, operation: null });
});

it('User pressed an operation after pressing =', () => {
  const test1 = calculate({
    total: 1000,
    next: null,
    operation: null,
  }, '+');

  expect(test1).toMatchSnapshot({ total: 1000, next: null, operation: '+' });
});

// User pressed an operation button and there is an existing operation
it('User pressed an operation button and there is an existing operation - no next', () => {
  const test1 = calculate({
    total: 1000,
    next: null,
    operation: '-',
  }, '+');

  expect(test1).toMatchSnapshot({ total: 1000, next: null, operation: '+' });
});

it('User pressed an operation button and there is an existing operation - no total', () => {
  const test1 = calculate({
    total: null,
    next: 30,
    operation: '-',
  }, '+');

  expect(test1).toEqual({ total: 0, operation: '+' });
});

it('User pressed an operation button and there is an existing operation', () => {
  const test1 = calculate({
    total: 100,
    next: 30,
    operation: '-',
  }, '+');

  expect(test1).toEqual({ total: '70', next: null, operation: '+' });
});

it('will return the total when = key is pressed', () => {
  const test1 = calculate({
    total: '2',
    next: '22',
    operation: '+',
  }, '=');

  expect(test1).toEqual({ total: '24', next: null, operation: null });
});

it('Object void - will return the operation', () => {
  const test1 = calculate(
    {}, '+',
  );
  expect(test1).toEqual({ operation: '+' });
});

it('save the operation and shift next into total', () => {
  const test1 = calculate({
    total: 0,
    next: 10,
    operation: null,
  }, '+');
  expect(test1).toEqual({ total: 10, next: null, operation: '+' });
});
