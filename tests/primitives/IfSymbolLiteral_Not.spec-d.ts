import { expectTypeOf } from "vitest";
import type { IfSymbolLiteral_Not as Test } from "#types/primitives";
type Actual<V extends symbol> = Test<V, Then, Else>;

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

  test("with `symbol` should resolve to `Then`", () => {
    type T = symbol;
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `Symbol()` should resolve to `Else`", () => {
    const _symbol = Symbol();
    type T = typeof _symbol;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
