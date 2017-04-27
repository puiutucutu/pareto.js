import debounce from "../src/extra/debounce";

it("debounces a function", done => {
  let a = 1;
  const fn = () => (a = 42);

  const debounced = debounce(fn, 100);
  debounced();

  expect(a).toBe(1);

  setTimeout(() => {
    expect(a).toBe(42);
    done();
  }, 300);
});

it("invokes immediately", done => {
  let a = 1;
  const fn = () => (a = 42);

  const debounced = debounce(fn, 100, true);
  debounced();

  expect(a).toBe(42);

  setTimeout(() => {
    expect(a).toBe(42);
    done();
  }, 300);
});
