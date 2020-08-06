const sum = require("./sum");
//import { sum } from './sum';

describe ('sum', () => {
  test('check 1 argument', () => {
    expect(sum(1)()).toBe(1);
  });


  test('check 5 arguments', () => {
    expect(sum(0)(3)(2)(-6)()).toBe(-1);
  });

  test('check 5 arguments with (1,2,3)(1)()', () => {
    expect(sum(1,2,3)(1)()).toBe(7);
  });

  test('check 1 zero argument', () => {
    expect(sum(0)()).toBe(0);
  });

  test('check no arguments', () => {
    expect(sum()).toBe(undefined);
  });

  test('check wrong arguments after ()', () => {
    let check = false;
    try {
      sum(1)(2)()(3);
    } catch (e ) {
      if (e instanceof TypeError) {
        check = true;
        expect(e.message).toContain("sum(...)(...)(...) is not a function")
      }
    }
    expect(check).toBeTruthy();
  });
});