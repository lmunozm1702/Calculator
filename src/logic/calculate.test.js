import renderer from 'react-test-renderer';
import calculate from './calculate';

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
