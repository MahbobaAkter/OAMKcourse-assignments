import { divide } from "../src/calculator.js";

test("valid division returns correct result", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error when first argument is not a number", () => {
  expect(() => divide("10", 2)).toThrow(TypeError);
});

test("throws error when second argument is not a number", () => {
  expect(() => divide(10, "2")).toThrow(TypeError);
});

test("throws error when argument is NaN", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

test("throws error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow(RangeError);
});
