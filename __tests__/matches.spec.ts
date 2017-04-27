import matches from "../src/extra/matches";

it("returns true if the object matches some properties", () => {
  const obj1 = { a: 1, b: 2 };

  expect(matches(obj1, { a: 1, b: 2 })).toBe(true);
  expect(matches(obj1, { a: 1 })).toBe(true);
  expect(matches(obj1, { a: 3 })).toBe(false);
});
