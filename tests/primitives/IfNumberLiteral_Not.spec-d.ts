/* eslint-disable @typescript-eslint/no-explicit-any */
import { expectTypeOf } from "vitest";
import type { IfNumberLiteral_Not as Test } from "#types/primitives";
type Actual<V extends number> = Test<V, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Then`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type T = any;
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Then`", () => {
    type T = never;
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `number` should resolve to `Then`", () => {
    type T = number;
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `42` should resolve to `Else`", () => {
    type T = 42;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `42.73` should resolve to `Else`", () => {
    type T = 42.73;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `42_730` should resolve to `Else`", () => {
    type T = 42_730;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
