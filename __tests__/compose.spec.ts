import compose from "../src/extra/compose";

it("composes functions", () => {
  const toUpperCase = x => x.toUpperCase();
  const exclaim = x => `${x}!`;
  const moreExclaim = x => `${x}!!`;

  expect(compose(toUpperCase, exclaim)("test")).toBe("TEST!");
  expect(compose(toUpperCase, exclaim, moreExclaim)("test")).toBe("TEST!!!");
});
