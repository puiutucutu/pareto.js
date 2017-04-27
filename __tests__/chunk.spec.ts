import chunk from "../src/extra/chunk";

it("returns the chunk of an array", () => {
  expect(chunk([1, 2, 3], 2)[0]).toEqual([1, 2]);
  expect(chunk([1, 2, 3], 2)[1]).toEqual([3]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)[0]).toEqual([1, 2, 3]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)[1]).toEqual([4, 5, 6]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)[2]).toEqual([7]);
});
