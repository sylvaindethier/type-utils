import { expectTypeOf } from "vitest";
import type { IfBooleanLiteral as ImportType } from "#types/index";
type TestType<V extends boolean> = ImportType<V, Then, Else>;

// Prevents false positive, and true negative
type Then = "Then";
type Else = "Else";

describe("should respect truth table", () => {
  test("with `any` should resolve to `Else`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type V = any;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `Else`", () => {
    type V = never;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `boolean` should resolve to `Else`", () => {
    type V = boolean;
    type Actual = TestType<V>;
    type Expected = Else;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `false` should resolve to `Then`", () => {
    type V = false;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test("with `true` should resolve to `Then`", () => {
    type V = true;
    type Actual = TestType<V>;
    type Expected = Then;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });
});
