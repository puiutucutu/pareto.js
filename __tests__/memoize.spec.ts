import memoize from "../src/extra/memoize";

it("memoizes functions", () => {
  let count = 0;

  const square = x => {
    count = count + 1;
    return x * x;
  };

  const memoSquare = memoize(square);

  expect(count).toBe(0);

  expect(memoSquare(10)).toBe(100);
  expect(memoSquare(10)).toBe(100);
  expect(memoSquare(10)).toBe(100);

  expect(count).toBe(1);

  expect(memoSquare(25)).toBe(625);
  expect(memoSquare(25)).toBe(625);

  expect(count).toBe(2);
});
