import tail from "../src/extra/tail";

it("gets the array except the first element", () => {
  expect(tail([1, 2, 3])).toEqual([2, 3]);
  expect(tail([1])).toEqual([]);
  expect(tail([])).toEqual([]);
});
