import head from '../src/extra/head';

it('gets the first element of an array', () => {
  expect(head([1, 2, 3])).toBe(1);
  expect(head([1])).toBe(1);
  expect(head([])).toBe(undefined);
});
