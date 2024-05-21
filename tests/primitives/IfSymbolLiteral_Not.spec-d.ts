import { expectTypeOf } from "vitest";
import type { IfSymbolLiteral_Not as ImportType } from "#types/index";
type TestType<V extends symbol> = ImportType<V, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Then`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type V = any;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Then`", () => {
    type V = never;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `symbol` should resolve to `Then`", () => {
    type V = symbol;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `Symbol()` should resolve to `Else`", () => {
    const _symbol = Symbol();
    type V = typeof _symbol;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
