import flatMap from "../src/extra/flatMap";

it("flatMaps an array", () => {
  const dup = n => [n, n];
  expect(flatMap([1, 2, 3], dup)).toEqual([1, 1, 2, 2, 3, 3]);

  const inc = n => n + 1;
  expect(flatMap([1, 2, 3], inc)).toEqual([2, 3, 4]);

  const id = n => n;
  expect(flatMap([1, 2, 3], id)).toEqual([1, 2, 3]);

  const sq = n => n ** 2;
  expect(flatMap([1, 2, 3], sq)).toEqual([1, 4, 9]);
});
