import get from "../src/extra/get";

it("gets the property of an object or returns the default value", () => {
  expect(get({ a: 1 }, "a")).toEqual(1);
  expect(get({ a: 1 }, "b", "default")).toEqual("default");
  expect(get({ a: { b: 2 } }, "a")).toEqual({ b: 2 });
  expect(get({ a: { b: 2 } }, "a.b")).toEqual(2);
  expect(get({ a: { b: 2 } }, "a.c")).toEqual(undefined);
  expect(get({ a: { b: { c: 3 } } }, "a.b.c")).toEqual(3);
  expect(get({ a: { b: { c: 3 } } }, "a.b.c", "default")).toEqual(3);
  expect(get({ a: { b: { c: 3 } } }, "a.c", "default")).toEqual("default");
});
