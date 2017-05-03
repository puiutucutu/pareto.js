import prop from "../src/extra/prop";

it("gets the property of an object", () => {
  const obj = {
    label: "custom label",
    id: 3
  };
  expect(prop("label", obj)).toBe("custom label");
  expect(prop("id", obj)).toBe(3);
});
