import deepCopy from "../src/extra/deepCopy";

it("deep copies an object", () => {
  const obj = {
    a: 1,
    b: 2,
    c: {
      d: 1,
      e: 2
    }
  };
  expect(deepCopy(obj)).toEqual({
    a: 1,
    b: 2,
    c: {
      d: 1,
      e: 2
    }
  });
});
