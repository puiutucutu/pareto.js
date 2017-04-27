import pipe from "../src/extra/pipe";

it("pipes functions", () => {
  const increment = x => x + 1;
  const decrement = x => x - 1;
  const double = x => x * 2;

  const pipe1 = pipe(increment, decrement, increment);
  expect(pipe1(0)).toBe(1);

  const pipe2 = pipe(increment, increment, double);
  expect(pipe2(0)).toBe(4);

  const pipe3 = pipe(decrement, double, decrement);
  expect(pipe3(0)).toBe(-3);
});
