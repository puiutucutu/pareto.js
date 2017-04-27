import curry from "../src/extra/curry";

it("returns the curried function", () => {
  const add = (a, b) => a + b;

  expect(curry(add, 1, 2)).toBe(3);
  expect(curry(add)(1)(2)).toBe(3);
  expect(curry(add)(1, 2)).toBe(3);
  expect(curry(add, 1)(2)).toBe(3);
});
