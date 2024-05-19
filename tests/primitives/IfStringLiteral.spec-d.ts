import { expectTypeOf } from "vitest";
import type { IfStringLiteral as Test } from "#types/primitives";
type Actual<V extends string> = Test<V, Then, Else>;

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

  test("with `string` should resolve to `Else`", () => {
    type T = string;
    type Expected = Else;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `''` should resolve to `Then`", () => {
    type T = "";
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `'foo'` should resolve to `Then`", () => {
    type T = "foo";
    type Expected = Then;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
