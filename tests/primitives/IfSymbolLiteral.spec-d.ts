import { expectTypeOf } from "vitest";
import type { IfSymbolLiteral as Test } from "#types/primitives";
type Actual<V extends symbol> = Test<V, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Else`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type T = any;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Else`", () => {
    type T = never;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `symbol` should resolve to `Else`", () => {
    type T = symbol;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `Symbol()` should resolve to `Then`", () => {
    const _symbol = Symbol();
    type T = typeof _symbol;
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
