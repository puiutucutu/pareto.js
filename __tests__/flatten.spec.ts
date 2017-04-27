import flatten from "../src/extra/flatten";

it("flattens an array", () => {
  expect(flatten([])).toEqual([]);
  expect(flatten([1, 2])).toEqual([1, 2]);
  expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
});
