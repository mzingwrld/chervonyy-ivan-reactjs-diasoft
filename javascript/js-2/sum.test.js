const sum = require("./sum");

test('sum() = undefined', () => {
  expect(sum()).toBe(undefined);
});

test('sum(1,undefined) = undefined', () => {
    expect(sum()).toBe(undefined);
  });

test('sum(1,2,3,4) = 10', () => {
  expect(sum(1,2,3,4)).toBe(10);
});

test('sum(1,-5,3,7) = 6', () => {
  expect(sum(1,-5,3,7)).toBe(6);
});

test('sum(1,1,1,1,1,1,1,1,1,1,1) = 11', () => {
  expect(sum(1,1,1,1,1,1,1,1,1,1,1)).toBe(11);
});

test('typeof sum(1,2,3) = "number"', () => {
  expect(typeof sum(1,2,3)).toBe("number");
});